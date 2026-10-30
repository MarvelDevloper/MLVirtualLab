/**
 * Backend K-Means Clustering Algorithm Engine
 * -------------------------------------------
 * College ML Lab Practical Viva Explanation:
 *
 * Mathematical Workflow:
 * 1. Choose K centroids (initial points randomly chosen from dataset).
 * 2. Calculate Euclidean Distance between every data point and each centroid:
 *    d(P, C) = sqrt((x2 - x1)^2 + (y2 - y1)^2)
 * 3. Assign each point to the closest centroid.
 * 4. Recalculate centroids as the arithmetic mean of all points assigned to that cluster.
 * 5. Repeat until centroids do not change position (convergence) or max iterations reached.
 */

// 1. Euclidean Distance
export function euclideanDistance(p1, p2) {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  return Math.sqrt(dx * dx + dy * dy);
}

// 2. K-Means Algorithm Runner
export function runKMeans(points, k, maxIterations = 100) {
  if (!points || points.length === 0 || k <= 0) {
    throw new Error("Invalid points array or K value.");
  }

  const actualK = Math.min(k, points.length);

  // Step 1: Initialize K centroids by randomly shuffling
  const shuffled = [...points].sort(() => 0.5 - Math.random());
  let centroids = shuffled.slice(0, actualK).map((p, idx) => ({
    clusterIndex: idx,
    x: Number(p.x),
    y: Number(p.y)
  }));

  let iteration = 0;
  let hasConverged = false;
  let pointAssignments = new Array(points.length).fill(0);

  while (iteration < maxIterations && !hasConverged) {
    iteration++;

    // Step 2 & 3: Assign points to nearest centroid
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

    // Step 4: Recompute centroids (mean of points in each cluster)
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
        // Retain previous centroid if cluster temporarily has no points
        newCentroids.push({ ...centroids[c] });
      }
    }

    // Step 5: Check Convergence
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

  // Count points in each cluster
  const clusterCounts = new Array(actualK).fill(0);
  pointAssignments.forEach((c) => {
    clusterCounts[c]++;
  });

  // Calculate Inertia (Within-Cluster Sum of Squares - WCSS)
  let inertia = 0;
  for (let i = 0; i < points.length; i++) {
    const cluster = pointAssignments[i];
    const dist = euclideanDistance(points[i], centroids[cluster]);
    inertia += dist * dist;
  }

  // Points annotated with their cluster label
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
    points: clusteredPoints
  };
}
