import React, { useState } from "react";

export default function DatasetSection({
  selectedDatasetKey,
  onSelectDataset,
  datasets,
  onRegenerateRandom
}) {
  const [previewLimit, setPreviewLimit] = useState(8);
  const currentDataset = datasets[selectedDatasetKey];

  return (
    <section id="dataset" className="section-card">
      <div className="section-header">
        <span className="section-badge">Section 2</span>
        <h2>Dataset Selection & Preview</h2>
        <p className="section-desc">
          Choose a benchmark dataset to train and evaluate the K-Means algorithm.
        </p>
      </div>

      <div className="dataset-control-bar">
        <div className="form-group dataset-select-group">
          <label htmlFor="dataset-select" className="form-label">
            Select Dataset:
          </label>
          <select
            id="dataset-select"
            className="form-select"
            value={selectedDatasetKey}
            onChange={(e) => onSelectDataset(e.target.value)}
          >
            <option value="iris">Iris Dataset (3 Flower Species)</option>
            <option value="mall">Mall Customers Dataset (Spending vs Income)</option>
            <option value="random">Randomly Generated Dataset (Synthetic Clusters)</option>
          </select>
        </div>

        {selectedDatasetKey === "random" && (
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onRegenerateRandom}
            title="Generate a fresh batch of synthetic random clusters"
          >
            &#x21bb; Regenerate Random Points
          </button>
        )}
      </div>

      <div className="dataset-meta-banner">
        <div className="meta-item">
          <span className="meta-label">Selected Dataset</span>
          <span className="meta-value">{currentDataset.name}</span>
        </div>
        <div className="meta-item">
          <span className="meta-label">Total Samples</span>
          <span className="meta-value">{currentDataset.data.length} points</span>
        </div>
        <div className="meta-item">
          <span className="meta-label">X-Axis Feature</span>
          <span className="meta-value">{currentDataset.xAxisLabel}</span>
        </div>
        <div className="meta-item">
          <span className="meta-label">Y-Axis Feature</span>
          <span className="meta-value">{currentDataset.yAxisLabel}</span>
        </div>
      </div>

      <p className="dataset-description-text">
        <strong>Description:</strong> {currentDataset.description}
      </p>

      {/* Dataset Preview Table */}
      <div className="table-wrapper">
        <div className="table-header-row">
          <span className="table-title">
            Data Sample Preview (First {Math.min(previewLimit, currentDataset.data.length)} of {currentDataset.data.length} records)
          </span>
          <div className="preview-toggle">
            <button
              className={`preview-chip ${previewLimit === 8 ? "active" : ""}`}
              onClick={() => setPreviewLimit(8)}
            >
              8 rows
            </button>
            <button
              className={`preview-chip ${previewLimit === 15 ? "active" : ""}`}
              onClick={() => setPreviewLimit(15)}
            >
              15 rows
            </button>
          </div>
        </div>

        <table className="data-table">
          <thead>
            <tr>
              {currentDataset.columns.map((col, idx) => (
                <th key={idx}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentDataset.data.slice(0, previewLimit).map((row, rIdx) => {
              const values = currentDataset.getRowValues(row);
              return (
                <tr key={rIdx}>
                  {values.map((val, cIdx) => (
                    <td key={cIdx}>{val}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
