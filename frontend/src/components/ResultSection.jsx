import React from "react";
import { CLUSTER_COLORS } from "../utils/kmeans";

export default function ResultSection({ results, datasetName, xAxisLabel, yAxisLabel }) {
  if (!results) {
    return (
      <section id="results" className="section-card empty-state">
        <div className="section-header">
          <span className="section-badge">Section 4</span>
          <h2>Experiment Results</h2>
        </div>
        <div className="empty-message">
          <p>No experiment has been executed yet.</p>
          <p className="sub">Select your dataset and click <strong>"Run Experiment"</strong> above to compute real K-Means clusters.</p>
        </div>
      </section>
    );
  }

  const { k, iterations, converged, centroids, clusterCounts, inertia, points } = results;
  const totalPoints = points.length;

  return (
    <section id="results" className="section-card">
      <div className="section-header">
        <span className="section-badge">Section 4</span>
        <h2>Experiment Results</h2>
        <p className="section-desc">
          Mathematical summary calculated by the client-side K-Means algorithm.
        </p>
      </div>

      {/* Summary Stat Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-label">Selected Dataset</span>
          <span className="stat-value text-blue">{datasetName}</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Number of Clusters (K)</span>
          <span className="stat-value">{k}</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Total Data Points</span>
          <span className="stat-value">{totalPoints}</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Iterations to Converge</span>
          <span className="stat-value">{iterations} {converged ? "(Converged)" : "(Max reached)"}</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Total Inertia (WCSS)</span>
          <span className="stat-value">{inertia}</span>
        </div>
      </div>

      {/* Cluster Distribution & Centroids Table */}
      <div className="results-detail-grid">
        {/* Points per cluster */}
        <div className="result-subcard">
          <h3 className="subcard-title">Points in Each Cluster</h3>
          <div className="cluster-list">
            {clusterCounts.map((count, idx) => {
              const color = CLUSTER_COLORS[idx % CLUSTER_COLORS.length];
              const percentage = ((count / totalPoints) * 100).toFixed(1);
              return (
                <div key={idx} className="cluster-item">
                  <div className="cluster-color-indicator" style={{ backgroundColor: color.border }} />
                  <div className="cluster-info">
                    <span className="cluster-name">Cluster {idx + 1}</span>
                    <span className="cluster-count">{count} points ({percentage}%)</span>
                  </div>
                  <div className="cluster-progress-bar">
                    <div
                      className="cluster-progress-fill"
                      style={{ width: `${percentage}%`, backgroundColor: color.border }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Final Cluster Centroids */}
        <div className="result-subcard">
          <h3 className="subcard-title">Final Cluster Centroids</h3>
          <div className="table-wrapper">
            <table className="data-table centroids-table">
              <thead>
                <tr>
                  <th>Cluster</th>
                  <th>Centroid X ({xAxisLabel})</th>
                  <th>Centroid Y ({yAxisLabel})</th>
                  <th>Assigned Points</th>
                </tr>
              </thead>
              <tbody>
                {centroids.map((c, idx) => {
                  const color = CLUSTER_COLORS[idx % CLUSTER_COLORS.length];
                  return (
                    <tr key={idx}>
                      <td>
                        <span
                          className="centroid-badge"
                          style={{
                            backgroundColor: color.background,
                            borderColor: color.border,
                            color: color.border
                          }}
                        >
                          C{idx + 1}
                        </span>
                        Cluster {idx + 1}
                      </td>
                      <td className="mono-val">{c.x.toFixed(2)}</td>
                      <td className="mono-val">{c.y.toFixed(2)}</td>
                      <td>{clusterCounts[idx]} points</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
