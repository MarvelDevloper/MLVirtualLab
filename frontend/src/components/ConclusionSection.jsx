import React from "react";

export default function ConclusionSection({ results, datasetKey, datasetName }) {
  if (!results) {
    return (
      <section id="conclusion" className="section-card empty-state">
        <div className="section-header">
          <span className="section-badge">Section 6</span>
          <h2>Conclusion & Analysis</h2>
        </div>
        <div className="empty-message">
          <p>Execute the experiment to see the automated analytical conclusions.</p>
        </div>
      </section>
    );
  }

  const { k, iterations, converged, clusterCounts, inertia, points } = results;
  const totalPoints = points.length;

  // Find largest and smallest clusters
  const maxCount = Math.max(...clusterCounts);
  const minCount = Math.min(...clusterCounts);
  const largestClusterIndex = clusterCounts.indexOf(maxCount) + 1;
  const smallestClusterIndex = clusterCounts.indexOf(minCount) + 1;

  // Context-specific interpretation
  let domainInterpretation = "";
  if (datasetKey === "iris") {
    domainInterpretation =
      "For the Iris dataset, Petal Length and Petal Width naturally separate flower specimens. Setting K = 3 matches the true ground reality of 3 botanical species (Setosa, Versicolor, and Virginica). Notice how Setosa forms an isolated, compact cluster at low petal dimensions, while Versicolor and Virginica are closer along the diagonal.";
  } else if (datasetKey === "mall") {
    domainInterpretation =
      "For the Mall Customers dataset, clustering segments shoppers based on income and expenditure. At K = 5, the model clearly reveals five classic consumer profiles: (1) Low Income / Low Spend (Careful), (2) Low Income / High Spend (Impulsive), (3) Moderate Income / Moderate Spend (Average), (4) High Income / Low Spend (Sensible), and (5) High Income / High Spend (Target VIPs).";
  } else {
    domainInterpretation =
      "For the synthetically generated dataset, K-Means successfully identified local high-density spatial regions based on Euclidean proximity, showing the algorithm's adaptability to arbitrary continuous numerical features.";
  }

  return (
    <section id="conclusion" className="section-card">
      <div className="section-header">
        <span className="section-badge">Section 6</span>
        <h2>Conclusion & Analysis</h2>
        <p className="section-desc">
          Key observations and analytical summary of the completed clustering experiment.
        </p>
      </div>

      <div className="conclusion-content">
        <div className="conclusion-block">
          <h3>1. Convergence & Grouping Summary</h3>
          <p>
            The K-Means algorithm successfully partitioned the <strong>{totalPoints}</strong> data points
            of the <em>{datasetName}</em> into <strong>{k} distinct clusters</strong> in{" "}
            <strong>{iterations} iterations</strong> {converged ? "reaching full mathematical convergence" : "before reaching iteration limits"}.
            Total Within-Cluster Sum of Squares (Inertia) was minimized to <strong>{inertia}</strong>.
          </p>
        </div>

        <div className="conclusion-block">
          <h3>2. Cluster Density Distribution</h3>
          <p>
            The largest grouping is <strong>Cluster {largestClusterIndex}</strong> containing{" "}
            <strong>{maxCount}</strong> points ({((maxCount / totalPoints) * 100).toFixed(1)}%),
            while <strong>Cluster {smallestClusterIndex}</strong> contains{" "}
            <strong>{minCount}</strong> points ({((minCount / totalPoints) * 100).toFixed(1)}%).
            {maxCount - minCount <= 5
              ? " The clusters are relatively well-balanced in size across the feature space."
              : " The clusters exhibit varying density, reflecting natural concentrations in the underlying distribution."}
          </p>
        </div>

        <div className="conclusion-block highlight-block">
          <h3>3. Domain-Specific Interpretation ({datasetName})</h3>
          <p>{domainInterpretation}</p>
        </div>

        <div className="viva-tip-card">
          <h4>&#x1f4a1; Quick Viva / Practical Evaluation Takeaway</h4>
          <p>
            <em>"K-Means is a greedy, heuristic algorithm sensitive to initial centroid placement and the chosen value of K. The final centroids represent the arithmetic average (center of mass) of all member points, effectively minimizing the Euclidean distance within each cluster."</em>
          </p>
        </div>
      </div>
    </section>
  );
}
