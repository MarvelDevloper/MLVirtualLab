import React from "react";

export default function ModelSection({
  algorithm,
  setAlgorithm,
  kValue,
  setKValue,
  onRunExperiment,
  isRunning
}) {
  return (
    <section id="model" className="section-card">
      <div className="section-header">
        <span className="section-badge">Section 3</span>
        <h2>Model Configuration</h2>
        <p className="section-desc">
          Configure model parameters and execute the K-Means clustering algorithm.
        </p>
      </div>

      <div className="model-config-grid">
        {/* Algorithm Selection */}
        <div className="form-group">
          <label htmlFor="algorithm-select" className="form-label">
            Clustering Algorithm
          </label>
          <select
            id="algorithm-select"
            className="form-select"
            value={algorithm}
            onChange={(e) => setAlgorithm(e.target.value)}
          >
            <option value="kmeans">K-Means Clustering (Centroid Partitioning)</option>
          </select>
          <span className="form-help">
            Partitions data into K clusters by minimizing Euclidean distance to cluster centers.
          </span>
        </div>

        {/* Number of Clusters (K) */}
        <div className="form-group">
          <div className="label-with-value">
            <label htmlFor="k-slider" className="form-label">
              Number of Clusters (K):
            </label>
            <span className="k-value-badge">K = {kValue}</span>
          </div>

          <div className="slider-container">
            <input
              id="k-slider"
              type="range"
              min="2"
              max="10"
              step="1"
              value={kValue}
              onChange={(e) => setKValue(parseInt(e.target.value, 10))}
              className="k-range-slider"
            />
            <div className="slider-ticks">
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>6</span>
              <span>7</span>
              <span>8</span>
              <span>9</span>
              <span>10</span>
            </div>
          </div>

          {/* Quick Select Buttons */}
          <div className="quick-k-pills">
            <span className="pills-label">Quick select:</span>
            {[2, 3, 4, 5, 6].map((num) => (
              <button
                key={num}
                type="button"
                className={`k-pill ${kValue === num ? "active" : ""}`}
                onClick={() => setKValue(num)}
              >
                K = {num}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Action CTA */}
      <div className="model-action-row">
        <button
          type="button"
          className="btn btn-primary btn-large"
          onClick={onRunExperiment}
          disabled={isRunning}
        >
          {isRunning ? (
            <>
              <span className="spinner"></span> Running K-Means...
            </>
          ) : (
            <>&#9654; Run Experiment</>
          )}
        </button>
        <span className="model-action-hint">
          Clicking "Run Experiment" executes the Euclidean-based K-Means algorithm on the selected data.
        </span>
      </div>
    </section>
  );
}
