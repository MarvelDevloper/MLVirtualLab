import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  CategoryScale
} from "chart.js";
import { Scatter, Bar } from "react-chartjs-2";
import { CLUSTER_COLORS } from "../utils/kmeans";

// Register all required Chart.js controllers and elements
ChartJS.register(
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  CategoryScale
);

export default function VisualizerSection({ results, datasetName, xAxisLabel, yAxisLabel }) {
  if (!results) {
    return (
      <section id="visualization" className="section-card empty-state">
        <div className="section-header">
          <span className="section-badge">Section 5</span>
          <h2>Graphs & Visualizations</h2>
        </div>
        <div className="empty-message">
          <p>Visualizations will be generated once you run the experiment.</p>
        </div>
      </section>
    );
  }

  const { k, centroids, clusterCounts, points } = results;

  // 1. Prepare Scatter Plot Datasets
  // Create a dataset for each cluster of points
  const scatterDatasets = [];
  for (let c = 0; c < k; c++) {
    const clusterPoints = points
      .filter((p) => p.cluster === c)
      .map((p) => ({ x: p.x, y: p.y, id: p.id }));

    const color = CLUSTER_COLORS[c % CLUSTER_COLORS.length];

    scatterDatasets.push({
      label: `Cluster ${c + 1} (${clusterPoints.length} pts)`,
      data: clusterPoints,
      backgroundColor: color.background,
      borderColor: color.border,
      borderWidth: 1.5,
      pointRadius: 5.5,
      pointHoverRadius: 8,
      pointStyle: "circle"
    });
  }

  // Add the Centroids dataset with prominent marker
  scatterDatasets.push({
    label: "Centroids (✦ Cluster Centers)",
    data: centroids.map((c, idx) => ({
      x: c.x,
      y: c.y,
      centroidLabel: `Centroid ${idx + 1}`
    })),
    backgroundColor: "#111827",
    borderColor: "#f59e0b",
    borderWidth: 3,
    pointRadius: 10,
    pointHoverRadius: 13,
    pointStyle: "crossRot",
    order: -1 // Ensure centroids render on top of data points
  });

  const scatterOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true,
          font: { family: "Inter, sans-serif", size: 12 }
        }
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const raw = context.raw;
            if (raw.centroidLabel) {
              return `${raw.centroidLabel}: (${raw.x.toFixed(2)}, ${raw.y.toFixed(2)})`;
            }
            return `Point: (${raw.x}, ${raw.y})`;
          }
        }
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: xAxisLabel,
          font: { family: "Inter, sans-serif", weight: "bold", size: 13 },
          color: "#1e293b"
        },
        grid: { color: "#e2e8f0" }
      },
      y: {
        title: {
          display: true,
          text: yAxisLabel,
          font: { family: "Inter, sans-serif", weight: "bold", size: 13 },
          color: "#1e293b"
        },
        grid: { color: "#e2e8f0" }
      }
    }
  };

  // 2. Prepare Bar Chart Data (Cluster Distribution)
  const barData = {
    labels: clusterCounts.map((_, idx) => `Cluster ${idx + 1}`),
    datasets: [
      {
        label: "Number of Data Points",
        data: clusterCounts,
        backgroundColor: clusterCounts.map(
          (_, idx) => CLUSTER_COLORS[idx % CLUSTER_COLORS.length].background
        ),
        borderColor: clusterCounts.map(
          (_, idx) => CLUSTER_COLORS[idx % CLUSTER_COLORS.length].border
        ),
        borderWidth: 1.5,
        borderRadius: 4
      }
    ]
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => `${context.parsed.y} points in this cluster`
        }
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Cluster Identifier",
          font: { family: "Inter, sans-serif", weight: "bold", size: 13 },
          color: "#1e293b"
        },
        grid: { display: false }
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Point Count",
          font: { family: "Inter, sans-serif", weight: "bold", size: 13 },
          color: "#1e293b"
        },
        ticks: { precision: 0 },
        grid: { color: "#e2e8f0" }
      }
    }
  };

  return (
    <section id="visualization" className="section-card">
      <div className="section-header">
        <span className="section-badge">Section 5</span>
        <h2>Graphs & Visualizations</h2>
        <p className="section-desc">
          Interactive 2D Scatter Plot with clearly marked centroids and Cluster Size Bar Chart.
        </p>
      </div>

      <div className="visualizer-grid">
        {/* Scatter Plot */}
        <div className="chart-container">
          <div className="chart-card-header">
            <h3>2D K-Means Cluster Scatter Plot</h3>
            <span className="chart-badge">Data Points + Centroids (&times;)</span>
          </div>
          <div className="canvas-wrapper">
            <Scatter data={{ datasets: scatterDatasets }} options={scatterOptions} />
          </div>
          <p className="chart-footer-note">
            &bull; Points with matching colors belong to the same cluster. Large "<strong>&times;</strong>" markers denote final centroids calculated by the algorithm.
          </p>
        </div>

        {/* Bar Chart */}
        <div className="chart-container">
          <div className="chart-card-header">
            <h3>Cluster Membership Distribution</h3>
            <span className="chart-badge">Points per Cluster</span>
          </div>
          <div className="canvas-wrapper">
            <Bar data={barData} options={barOptions} />
          </div>
          <p className="chart-footer-note">
            &bull; Compares the relative distribution and density of data across all {k} clusters.
          </p>
        </div>
      </div>
    </section>
  );
}
