/**
 * K-Means Clustering Algorithm Implementation
 * -------------------------------------------
 * Designed for educational clarity and college viva/practical explanation.
 *
 * Steps of K-Means:
 * 1. Initialize K centroids randomly from the dataset points.
 * 2. Calculate Euclidean distance from every point to every centroid.
 * 3. Assign each point to its nearest centroid (forming clusters).
 * 4. Recalculate each centroid as the arithmetic mean of all points assigned to it.
 * 5. Check for convergence (if centroids do not change position, or max iterations reached).
 * 6. Repeat steps 2 to 5.
 */

// 1. Euclidean Distance Function: d = sqrt((x2 - x1)^2 + (y2 - y1)^2)
export function euclideanDistance(p1, p2) {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  return Math.sqrt(dx * dx + dy * dy);
}

// 2. Main K-Means Execution Function
export function runKMeans(points, k, maxIterations = 100) {
  if (!points || points.length === 0 || k <= 0) {
    return null;
  }

  // Ensure K does not exceed number of data points
  const actualK = Math.min(k, points.length);

  // Step 1: Initialize K centroids
  // We use K distinct points chosen randomly from the dataset
  const shuffled = [...points].sort(() => 0.5 - Math.random());
  let centroids = shuffled.slice(0, actualK).map((p, idx) => ({
    clusterIndex: idx,
    x: Number(p.x),
    y: Number(p.y)
  }));

  let iteration = 0;
  let hasConverged = false;
  let pointAssignments = new Array(points.length).fill(0);
  const history = [];

  while (iteration < maxIterations && !hasConverged) {
    iteration++;

    // Step 2 & 3: Assign each point to the closest centroid
    const newAssignments = [];
    for (let i = 0; i < points.length; i++) {
      const pt = points[i];
      let minDistance = Infinity;
      let closestCluster = 0;

      for (let c = 0; c < centroids.length; c++) {
        const dist = euclideanDistance(pt, centroids[c]);
        if (dist < minDistance) {
          minDistance = dist;
          closestCluster = c;
        }
      }
      newAssignments.push(closestCluster);
    }

    // Step 4: Calculate new centroids (mean of points in each cluster)
    const newCentroids = [];
    for (let c = 0; c < actualK; c++) {
      const clusterPoints = points.filter((_, idx) => newAssignments[idx] === c);

      if (clusterPoints.length > 0) {
        const sumX = clusterPoints.reduce((acc, p) => acc + Number(p.x), 0);
        const sumY = clusterPoints.reduce((acc, p) => acc + Number(p.y), 0);
        newCentroids.push({
          clusterIndex: c,
          x: parseFloat((sumX / clusterPoints.length).toFixed(2)),
          y: parseFloat((sumY / clusterPoints.length).toFixed(2))
        });
      } else {
        // Fallback for an empty cluster: keep current centroid position
        newCentroids.push({ ...centroids[c] });
      }
    }

    // Save step history for educational visualization
    history.push({
      iteration,
      centroids: JSON.parse(JSON.stringify(newCentroids)),
      assignments: [...newAssignments]
    });

    // Step 5: Check convergence
    // Centroids are converged if distance between old and new centroids is practically 0
    let maxShift = 0;
    for (let c = 0; c < actualK; c++) {
      const shift = euclideanDistance(centroids[c], newCentroids[c]);
      if (shift > maxShift) {
        maxShift = shift;
      }
    }

    if (maxShift < 0.0001) {
      hasConverged = true;
    }

    centroids = newCentroids;
    pointAssignments = newAssignments;
  }

  // Calculate cluster counts
  const clusterCounts = new Array(actualK).fill(0);
  pointAssignments.forEach((c) => {
    clusterCounts[c]++;
  });

  // Calculate Within-Cluster Sum of Squares (Inertia/WCSS)
  let inertia = 0;
  for (let i = 0; i < points.length; i++) {
    const cluster = pointAssignments[i];
    const dist = euclideanDistance(points[i], centroids[cluster]);
    inertia += dist * dist;
  }

  // Attach cluster labels to points for output
  const clusteredPoints = points.map((p, idx) => ({
    ...p,
    cluster: pointAssignments[idx]
  }));

  return {
    k: actualK,
    iterations: iteration,
    converged: hasConverged,
    centroids,
    clusterCounts,
    inertia: parseFloat(inertia.toFixed(2)),
    points: clusteredPoints,
    history
  };
}

// Predefined visually distinct cluster colors (light theme compatible)
export const CLUSTER_COLORS = [
  { border: "#2563eb", background: "rgba(37, 99, 235, 0.75)", name: "Blue" },
  { border: "#dc2626", background: "rgba(220, 38, 38, 0.75)", name: "Red" },
  { border: "#16a34a", background: "rgba(22, 163, 74, 0.75)", name: "Green" },
  { border: "#d97706", background: "rgba(217, 119, 6, 0.75)", name: "Amber" },
  { border: "#9333ea", background: "rgba(147, 51, 234, 0.75)", name: "Purple" },
  { border: "#0891b2", background: "rgba(8, 145, 178, 0.75)", name: "Cyan" },
  { border: "#db2777", background: "rgba(219, 39, 119, 0.75)", name: "Pink" },
  { border: "#4f46e5", background: "rgba(79, 70, 229, 0.75)", name: "Indigo" },
  { border: "#ca8a04", background: "rgba(202, 138, 4, 0.75)", name: "Yellow" },
  { border: "#475569", background: "rgba(71, 85, 105, 0.75)", name: "Slate" }
];
