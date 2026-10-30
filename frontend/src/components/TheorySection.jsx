import React from "react";

export default function TheorySection() {
  return (
    <section id="theory" className="section-card">
      <div className="section-header">
        <span className="section-badge">Section 1</span>
        <h2>Theory & Fundamentals</h2>
        <p className="section-desc">
          Essential concepts of unsupervised learning and the K-Means clustering algorithm.
        </p>
      </div>

      <div className="grid-2-col">
        {/* Unsupervised Learning */}
        <div className="theory-box">
          <div className="theory-box-header">
            <span className="icon-badge">01</span>
            <h3>What is Unsupervised Learning?</h3>
          </div>
          <p>
            <strong>Unsupervised Learning</strong> is a category of Machine Learning where models are trained
            on raw, unlabeled data without predefined answers or target labels. The algorithm autonomously
            identifies hidden patterns, groupings, and underlying structures within the dataset.
          </p>
        </div>

        {/* Clustering */}
        <div className="theory-box">
          <div className="theory-box-header">
            <span className="icon-badge">02</span>
            <h3>What is Clustering?</h3>
          </div>
          <p>
            <strong>Clustering</strong> is the unsupervised task of dividing data points into groups (called
            clusters) such that objects within the same cluster are more similar to each other than to those
            belonging to other clusters.
          </p>
        </div>

        {/* What is K-Means */}
        <div className="theory-box">
          <div className="theory-box-header">
            <span className="icon-badge">03</span>
            <h3>What is K-Means Clustering?</h3>
          </div>
          <p>
            <strong>K-Means</strong> is an iterative, centroid-based clustering algorithm that partitions a
            dataset into <strong>K</strong> non-overlapping subgroups. Each data point belongs to the cluster
            whose center (centroid) is closest to it.
          </p>
        </div>

        {/* Euclidean Distance */}
        <div className="theory-box formula-box">
          <div className="theory-box-header">
            <span className="icon-badge">04</span>
            <h3>Euclidean Distance Formula</h3>
          </div>
          <p>
            K-Means measures the similarity (distance) between a data point \(P(x_1, y_1)\) and a centroid \(C(x_2, y_2)\) using Euclidean distance:
          </p>
          <div className="formula-display">
            d(P, C) = &radic;((x₂ - x₁)² + (y₂ - y₁)²)
          </div>
          <p className="formula-caption">
            Smaller distance indicates higher similarity between the data point and the cluster centroid.
          </p>
        </div>
      </div>

      {/* Steps involved in K-Means */}
      <div className="theory-steps-card">
        <h3>Step-by-Step Working of K-Means Algorithm</h3>
        <div className="steps-list">
          <div className="step-item">
            <div className="step-number">Step 1</div>
            <h4>Select K</h4>
            <p>Specify the desired number of clusters (K) to partition the data into.</p>
          </div>
          <div className="step-item">
            <div className="step-number">Step 2</div>
            <h4>Initialize Centroids</h4>
            <p>Randomly pick K data points as the initial centers (centroids) of each cluster.</p>
          </div>
          <div className="step-item">
            <div className="step-number">Step 3</div>
            <h4>Assign Points</h4>
            <p>Compute Euclidean distance from each point to all centroids; assign point to nearest centroid.</p>
          </div>
          <div className="step-item">
            <div className="step-number">Step 4</div>
            <h4>Update Centroids</h4>
            <p>Calculate the arithmetic mean of all points assigned to each cluster to find new centroid positions.</p>
          </div>
          <div className="step-item">
            <div className="step-number">Step 5</div>
            <h4>Check Convergence</h4>
            <p>Repeat steps 3 & 4 until centroids stop changing position or maximum iterations are reached.</p>
          </div>
        </div>
      </div>

      {/* Advantages and Applications */}
      <div className="grid-2-col" style={{ marginTop: "1rem" }}>
        <div className="theory-box">
          <div className="theory-box-header">
            <span className="icon-badge">&check;</span>
            <h3>Advantages of K-Means</h3>
          </div>
          <ul className="theory-bullet-list">
            <li><strong>Simple to Understand:</strong> Intuitive mathematical formulation based on means and distances.</li>
            <li><strong>Fast & Scalable:</strong> Computational complexity of \(O(t \times K \times n)\), efficient on moderate to large datasets.</li>
            <li><strong>Guaranteed Convergence:</strong> Iterations always decrease or maintain the within-cluster variance.</li>
            <li><strong>Flexible:</strong> Works seamlessly across multi-dimensional feature spaces.</li>
          </ul>
        </div>

        <div className="theory-box">
          <div className="theory-box-header">
            <span className="icon-badge">&starf;</span>
            <h3>Real-World Applications</h3>
          </div>
          <ul className="theory-bullet-list">
            <li><strong>Customer Segmentation:</strong> Grouping mall customers by income and spending habits for targeted marketing.</li>
            <li><strong>Biology & Botany:</strong> Classifying flower species (like the Iris dataset) by anatomical features.</li>
            <li><strong>Image Compression:</strong> Reducing the number of distinct colors in digital images (color quantization).</li>
            <li><strong>Document Clustering:</strong> Organizing large archives of news articles or research papers by topic.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
