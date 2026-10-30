import express from "express";
import cors from "cors";
import { DATASETS, generateRandomDataset } from "./datasets.js";
import { runKMeans } from "./kmeans.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS so the React frontend on localhost:5173 can call this API
app.use(cors());
app.use(express.json());

// In-memory store for datasets (to support regenerating random dataset)
let currentDatasets = { ...DATASETS };

// 1. Health Check Endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "K-Means Clustering Virtual Lab Backend is running smoothly",
    timestamp: new Date().toISOString()
  });
});

// 2. Get All Datasets (Metadata + preview data)
app.get("/api/datasets", (req, res) => {
  const metadata = Object.keys(currentDatasets).map((key) => {
    const ds = currentDatasets[key];
    return {
      key: ds.id,
      name: ds.name,
      description: ds.description,
      totalPoints: ds.data.length,
      xAxisLabel: ds.xAxisLabel,
      yAxisLabel: ds.yAxisLabel,
      columns: ds.columns
    };
  });
  res.json({ success: true, datasets: metadata });
});

// 3. Get Specific Dataset by Key (e.g., /api/datasets/iris)
app.get("/api/datasets/:key", (req, res) => {
  const { key } = req.params;
  const dataset = currentDatasets[key];
  if (!dataset) {
    return res.status(404).json({ success: false, error: "Dataset not found" });
  }
  res.json({ success: true, dataset });
});

// 4. Regenerate Random Dataset
app.post("/api/datasets/random/regenerate", (req, res) => {
  const freshData = generateRandomDataset();
  currentDatasets.random = {
    ...currentDatasets.random,
    data: freshData
  };
  res.json({
    success: true,
    message: "Fresh random clusters generated",
    dataset: currentDatasets.random
  });
});

// 5. Run K-Means Clustering Experiment
app.post("/api/kmeans/run", (req, res) => {
  try {
    const { datasetKey, k, points: customPoints } = req.body;

    const clusterK = parseInt(k, 10);
    if (!clusterK || clusterK < 2 || clusterK > 10) {
      return res.status(400).json({
        success: false,
        error: "K must be an integer between 2 and 10."
      });
    }

    // Determine points to cluster
    let points = customPoints;
    let datasetName = "Custom Dataset";
    let xAxisLabel = "Feature X";
    let yAxisLabel = "Feature Y";

    if (datasetKey && currentDatasets[datasetKey]) {
      const ds = currentDatasets[datasetKey];
      points = ds.data;
      datasetName = ds.name;
      xAxisLabel = ds.xAxisLabel;
      yAxisLabel = ds.yAxisLabel;
    }

    if (!points || !Array.isArray(points) || points.length === 0) {
      return res.status(400).json({
        success: false,
        error: "No points provided for clustering."
      });
    }

    // Execute K-Means algorithm on backend
    const results = runKMeans(points, clusterK);

    res.json({
      success: true,
      datasetName,
      xAxisLabel,
      yAxisLabel,
      results
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message || "Failed to execute K-Means clustering."
    });
  }
});

// Start Express Server
app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(` K-Means Virtual Lab Backend API running on port ${PORT}`);
  console.log(` Health URL: http://localhost:${PORT}/api/health`);
  console.log(`=======================================================`);
});
