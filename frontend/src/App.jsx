import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import TheorySection from "./components/TheorySection";
import DatasetSection from "./components/DatasetSection";
import ModelSection from "./components/ModelSection";
import ResultSection from "./components/ResultSection";
import VisualizerSection from "./components/VisualizerSection";
import ConclusionSection from "./components/ConclusionSection";
import { DATASETS, generateRandomDataset } from "./data/datasets";
import { runKMeans } from "./utils/kmeans";
import "./App.css";

const BACKEND_URL = "http://localhost:5000/api";

export default function App() {
  const [datasets, setDatasets] = useState(DATASETS);
  const [selectedDatasetKey, setSelectedDatasetKey] = useState("iris");
  const [kValue, setKValue] = useState(3);
  const [algorithm, setAlgorithm] = useState("kmeans");
  const [results, setResults] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [backendStatus, setBackendStatus] = useState("checking"); // 'connected' | 'offline' | 'checking'
  const [executionSource, setExecutionSource] = useState("Local");

  // Check backend health on startup
  useEffect(() => {
    async function checkHealth() {
      try {
        const response = await fetch(`${BACKEND_URL}/health`);
        const data = await response.json();
        if (data.status === "ok") {
          setBackendStatus("connected");
        } else {
          setBackendStatus("offline");
        }
      } catch (err) {
        setBackendStatus("offline");
      }
    }
    checkHealth();
  }, []);

  // Helper to execute experiment (tries backend API first, falls back to client-side)
  const executeExperiment = async (dsKey = selectedDatasetKey, k = kValue) => {
    setIsRunning(true);

    try {
      // 1. Try Backend API call
      const response = await fetch(`${BACKEND_URL}/kmeans/run`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          datasetKey: dsKey,
          k: k,
          points: datasets[dsKey].data
        })
      });

      if (!response.ok) {
        throw new Error("Backend responded with error");
      }

      const resData = await response.json();
      if (resData.success && resData.results) {
        setResults(resData.results);
        setExecutionSource("Backend API (Express)");
        setBackendStatus("connected");
        setIsRunning(false);
        return;
      }
    } catch (err) {
      // 2. Fallback gracefully to client-side JavaScript execution
      console.log("Using client-side K-Means algorithm fallback:", err.message);
      setBackendStatus("offline");
      setExecutionSource("Local Client Engine");
      const activeData = datasets[dsKey].data;
      const clientRes = runKMeans(activeData, k);
      setResults(clientRes);
    } finally {
      setIsRunning(false);
    }
  };

  // Run initial experiment on mount
  useEffect(() => {
    executeExperiment("iris", 3);
  }, []);

  // When user switches dataset
  const handleSelectDataset = (newKey) => {
    setSelectedDatasetKey(newKey);
    let newK = kValue;
    if (newKey === "iris" && kValue > 5) newK = 3;
    if (newKey === "mall" && kValue < 3) newK = 5;
    setKValue(newK);
    executeExperiment(newKey, newK);
  };

  // Handler for regenerating random dataset
  const handleRegenerateRandom = async () => {
    try {
      // Try backend regeneration
      const response = await fetch(`${BACKEND_URL}/datasets/random/regenerate`, {
        method: "POST"
      });
      const data = await response.json();
      if (data.success && data.dataset) {
        setDatasets((prev) => ({
          ...prev,
          random: {
            ...prev.random,
            data: data.dataset.data
          }
        }));
        executeExperiment("random", kValue);
        return;
      }
    } catch (err) {
      // Fallback to local random generation
      const freshRandomPoints = generateRandomDataset();
      setDatasets((prev) => ({
        ...prev,
        random: {
          ...prev.random,
          data: freshRandomPoints
        }
      }));
      executeExperiment("random", kValue);
    }
  };

  const handleRunClick = () => {
    executeExperiment(selectedDatasetKey, kValue);
    // Smooth scroll down to results
    const resultsElem = document.getElementById("results");
    if (resultsElem) {
      resultsElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const activeDataset = datasets[selectedDatasetKey];

  return (
    <div className="vlab-app">
      <Navbar backendStatus={backendStatus} />

      <main className="main-content">
        {/* Lab Header Hero */}
        <div className="hero-banner">
          <div className="hero-text">
            <h2>K-Means Clustering Simulation & Visualizer</h2>
            <p>
              An interactive virtual experiment platform to understand unsupervised machine learning,
              centroid initialization, Euclidean distance grouping, and cluster analysis.
            </p>
          </div>
          <div className="hero-tags">
            <span className="badge-tag">Algorithm: K-Means</span>
            <span className="badge-tag">Distance: Euclidean</span>
            <span className={`badge-tag ${backendStatus === "connected" ? "badge-success" : "badge-neutral"}`}>
              Backend API: {backendStatus === "connected" ? "Online (Port 5000)" : "Offline (Local Engine Active)"}
            </span>
            <span className="badge-tag">Engine: {executionSource}</span>
          </div>
        </div>

        {/* Section 1: Theory */}
        <TheorySection />

        {/* Section 2: Dataset Selection */}
        <DatasetSection
          selectedDatasetKey={selectedDatasetKey}
          onSelectDataset={handleSelectDataset}
          datasets={datasets}
          onRegenerateRandom={handleRegenerateRandom}
        />

        {/* Section 3: Model Configuration */}
        <ModelSection
          algorithm={algorithm}
          setAlgorithm={setAlgorithm}
          kValue={kValue}
          setKValue={setKValue}
          onRunExperiment={handleRunClick}
          isRunning={isRunning}
        />

        {/* Section 4: Results */}
        <ResultSection
          results={results}
          datasetName={activeDataset.name}
          xAxisLabel={activeDataset.xAxisLabel}
          yAxisLabel={activeDataset.yAxisLabel}
        />

        {/* Section 5: Visualization */}
        <VisualizerSection
          results={results}
          datasetName={activeDataset.name}
          xAxisLabel={activeDataset.xAxisLabel}
          yAxisLabel={activeDataset.yAxisLabel}
        />

        {/* Section 6: Conclusion */}
        <ConclusionSection
          results={results}
          datasetKey={selectedDatasetKey}
          datasetName={activeDataset.name}
        />
      </main>

      <footer className="footer">
        <p>
          <strong>K-Means Clustering Virtual Lab</strong> &bull; College Machine Learning Continuous Assessment Assignment
        </p>
        <p className="footer-sub">
          Full-Stack Architecture: Express.js Backend (<code>backend/</code>) & React.js Vite Frontend (<code>frontend/</code>)
        </p>
      </footer>
    </div>
  );
}
