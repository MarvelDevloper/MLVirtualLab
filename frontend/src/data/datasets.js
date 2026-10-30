// Real sample records from the classic Iris Dataset (Petal Length vs Petal Width)
// These two features clearly show natural clustering in biological data
export const IRIS_DATA = [
  // Setosa cluster (low petal length, low petal width)
  { id: 1, sepalLength: 5.1, sepalWidth: 3.5, petalLength: 1.4, petalWidth: 0.2, species: "Iris-setosa", x: 1.4, y: 0.2 },
  { id: 2, sepalLength: 4.9, sepalWidth: 3.0, petalLength: 1.4, petalWidth: 0.2, species: "Iris-setosa", x: 1.4, y: 0.2 },
  { id: 3, sepalLength: 4.7, sepalWidth: 3.2, petalLength: 1.3, petalWidth: 0.2, species: "Iris-setosa", x: 1.3, y: 0.2 },
  { id: 4, sepalLength: 4.6, sepalWidth: 3.1, petalLength: 1.5, petalWidth: 0.2, species: "Iris-setosa", x: 1.5, y: 0.2 },
  { id: 5, sepalLength: 5.0, sepalWidth: 3.6, petalLength: 1.4, petalWidth: 0.2, species: "Iris-setosa", x: 1.4, y: 0.2 },
  { id: 6, sepalLength: 5.4, sepalWidth: 3.9, petalLength: 1.7, petalWidth: 0.4, species: "Iris-setosa", x: 1.7, y: 0.4 },
  { id: 7, sepalLength: 4.6, sepalWidth: 3.4, petalLength: 1.4, petalWidth: 0.3, species: "Iris-setosa", x: 1.4, y: 0.3 },
  { id: 8, sepalLength: 5.0, sepalWidth: 3.4, petalLength: 1.5, petalWidth: 0.2, species: "Iris-setosa", x: 1.5, y: 0.2 },
  { id: 9, sepalLength: 4.4, sepalWidth: 2.9, petalLength: 1.4, petalWidth: 0.2, species: "Iris-setosa", x: 1.4, y: 0.2 },
  { id: 10, sepalLength: 4.9, sepalWidth: 3.1, petalLength: 1.5, petalWidth: 0.1, species: "Iris-setosa", x: 1.5, y: 0.1 },
  { id: 11, sepalLength: 5.4, sepalWidth: 3.7, petalLength: 1.5, petalWidth: 0.2, species: "Iris-setosa", x: 1.5, y: 0.2 },
  { id: 12, sepalLength: 4.8, sepalWidth: 3.4, petalLength: 1.6, petalWidth: 0.2, species: "Iris-setosa", x: 1.6, y: 0.2 },
  { id: 13, sepalLength: 4.8, sepalWidth: 3.0, petalLength: 1.4, petalWidth: 0.1, species: "Iris-setosa", x: 1.4, y: 0.1 },
  { id: 14, sepalLength: 4.3, sepalWidth: 3.0, petalLength: 1.1, petalWidth: 0.1, species: "Iris-setosa", x: 1.1, y: 0.1 },
  { id: 15, sepalLength: 5.8, sepalWidth: 4.0, petalLength: 1.2, petalWidth: 0.2, species: "Iris-setosa", x: 1.2, y: 0.2 },
  { id: 16, sepalLength: 5.7, sepalWidth: 4.4, petalLength: 1.5, petalWidth: 0.4, species: "Iris-setosa", x: 1.5, y: 0.4 },
  { id: 17, sepalLength: 5.4, sepalWidth: 3.9, petalLength: 1.3, petalWidth: 0.4, species: "Iris-setosa", x: 1.3, y: 0.4 },
  { id: 18, sepalLength: 5.1, sepalWidth: 3.5, petalLength: 1.4, petalWidth: 0.3, species: "Iris-setosa", x: 1.4, y: 0.3 },
  { id: 19, sepalLength: 5.7, sepalWidth: 3.8, petalLength: 1.7, petalWidth: 0.3, species: "Iris-setosa", x: 1.7, y: 0.3 },
  { id: 20, sepalLength: 5.1, sepalWidth: 3.8, petalLength: 1.5, petalWidth: 0.3, species: "Iris-setosa", x: 1.5, y: 0.3 },

  // Versicolor cluster (mid petal length, mid petal width)
  { id: 21, sepalLength: 7.0, sepalWidth: 3.2, petalLength: 4.7, petalWidth: 1.4, species: "Iris-versicolor", x: 4.7, y: 1.4 },
  { id: 22, sepalLength: 6.4, sepalWidth: 3.2, petalLength: 4.5, petalWidth: 1.5, species: "Iris-versicolor", x: 4.5, y: 1.5 },
  { id: 23, sepalLength: 6.9, sepalWidth: 3.1, petalLength: 4.9, petalWidth: 1.5, species: "Iris-versicolor", x: 4.9, y: 1.5 },
  { id: 24, sepalLength: 5.5, sepalWidth: 2.3, petalLength: 4.0, petalWidth: 1.3, species: "Iris-versicolor", x: 4.0, y: 1.3 },
  { id: 25, sepalLength: 6.5, sepalWidth: 2.8, petalLength: 4.6, petalWidth: 1.5, species: "Iris-versicolor", x: 4.6, y: 1.5 },
  { id: 26, sepalLength: 5.7, sepalWidth: 2.8, petalLength: 4.5, petalWidth: 1.3, species: "Iris-versicolor", x: 4.5, y: 1.3 },
  { id: 27, sepalLength: 6.3, sepalWidth: 3.3, petalLength: 4.7, petalWidth: 1.6, species: "Iris-versicolor", x: 4.7, y: 1.6 },
  { id: 28, sepalLength: 4.9, sepalWidth: 2.4, petalLength: 3.3, petalWidth: 1.0, species: "Iris-versicolor", x: 3.3, y: 1.0 },
  { id: 29, sepalLength: 6.6, sepalWidth: 2.9, petalLength: 4.6, petalWidth: 1.3, species: "Iris-versicolor", x: 4.6, y: 1.3 },
  { id: 30, sepalLength: 5.2, sepalWidth: 2.7, petalLength: 3.9, petalWidth: 1.4, species: "Iris-versicolor", x: 3.9, y: 1.4 },
  { id: 31, sepalLength: 5.0, sepalWidth: 2.0, petalLength: 3.5, petalWidth: 1.0, species: "Iris-versicolor", x: 3.5, y: 1.0 },
  { id: 32, sepalLength: 5.9, sepalWidth: 3.0, petalLength: 4.2, petalWidth: 1.5, species: "Iris-versicolor", x: 4.2, y: 1.5 },
  { id: 33, sepalLength: 6.0, sepalWidth: 2.2, petalLength: 4.0, petalWidth: 1.0, species: "Iris-versicolor", x: 4.0, y: 1.0 },
  { id: 34, sepalLength: 6.1, sepalWidth: 2.9, petalLength: 4.7, petalWidth: 1.4, species: "Iris-versicolor", x: 4.7, y: 1.4 },
  { id: 35, sepalLength: 5.6, sepalWidth: 2.9, petalLength: 3.6, petalWidth: 1.3, species: "Iris-versicolor", x: 3.6, y: 1.3 },
  { id: 36, sepalLength: 6.7, sepalWidth: 3.1, petalLength: 4.4, petalWidth: 1.4, species: "Iris-versicolor", x: 4.4, y: 1.4 },
  { id: 37, sepalLength: 5.6, sepalWidth: 3.0, petalLength: 4.5, petalWidth: 1.5, species: "Iris-versicolor", x: 4.5, y: 1.5 },
  { id: 38, sepalLength: 5.8, sepalWidth: 2.7, petalLength: 4.1, petalWidth: 1.0, species: "Iris-versicolor", x: 4.1, y: 1.0 },
  { id: 39, sepalLength: 6.2, sepalWidth: 2.2, petalLength: 4.5, petalWidth: 1.5, species: "Iris-versicolor", x: 4.5, y: 1.5 },
  { id: 40, sepalLength: 5.6, sepalWidth: 2.5, petalLength: 3.9, petalWidth: 1.1, species: "Iris-versicolor", x: 3.9, y: 1.1 },

  // Virginica cluster (high petal length, high petal width)
  { id: 41, sepalLength: 6.3, sepalWidth: 3.3, petalLength: 6.0, petalWidth: 2.5, species: "Iris-virginica", x: 6.0, y: 2.5 },
  { id: 42, sepalLength: 5.8, sepalWidth: 2.7, petalLength: 5.1, petalWidth: 1.9, species: "Iris-virginica", x: 5.1, y: 1.9 },
  { id: 43, sepalLength: 7.1, sepalWidth: 3.0, petalLength: 5.9, petalWidth: 2.1, species: "Iris-virginica", x: 5.9, y: 2.1 },
  { id: 44, sepalLength: 6.3, sepalWidth: 2.9, petalLength: 5.6, petalWidth: 1.8, species: "Iris-virginica", x: 5.6, y: 1.8 },
  { id: 45, sepalLength: 6.5, sepalWidth: 3.0, petalLength: 5.8, petalWidth: 2.2, species: "Iris-virginica", x: 5.8, y: 2.2 },
  { id: 46, sepalLength: 7.6, sepalWidth: 3.0, petalLength: 6.6, petalWidth: 2.1, species: "Iris-virginica", x: 6.6, y: 2.1 },
  { id: 47, sepalLength: 4.9, sepalWidth: 2.5, petalLength: 4.5, petalWidth: 1.7, species: "Iris-virginica", x: 4.5, y: 1.7 },
  { id: 48, sepalLength: 7.3, sepalWidth: 2.9, petalLength: 6.3, petalWidth: 1.8, species: "Iris-virginica", x: 6.3, y: 1.8 },
  { id: 49, sepalLength: 6.7, sepalWidth: 2.5, petalLength: 5.8, petalWidth: 1.8, species: "Iris-virginica", x: 5.8, y: 1.8 },
  { id: 50, sepalLength: 7.2, sepalWidth: 3.6, petalLength: 6.1, petalWidth: 2.5, species: "Iris-virginica", x: 6.1, y: 2.5 },
  { id: 51, sepalLength: 6.5, sepalWidth: 3.2, petalLength: 5.1, petalWidth: 2.0, species: "Iris-virginica", x: 5.1, y: 2.0 },
  { id: 52, sepalLength: 6.4, sepalWidth: 2.7, petalLength: 5.3, petalWidth: 1.9, species: "Iris-virginica", x: 5.3, y: 1.9 },
  { id: 53, sepalLength: 6.8, sepalWidth: 3.0, petalLength: 5.5, petalWidth: 2.1, species: "Iris-virginica", x: 5.5, y: 2.1 },
  { id: 54, sepalLength: 5.7, sepalWidth: 2.5, petalLength: 5.0, petalWidth: 2.0, species: "Iris-virginica", x: 5.0, y: 2.0 },
  { id: 55, sepalLength: 5.8, sepalWidth: 2.8, petalLength: 5.1, petalWidth: 2.4, species: "Iris-virginica", x: 5.1, y: 2.4 },
  { id: 56, sepalLength: 6.4, sepalWidth: 3.2, petalLength: 5.3, petalWidth: 2.3, species: "Iris-virginica", x: 5.3, y: 2.3 },
  { id: 57, sepalLength: 6.5, sepalWidth: 3.0, petalLength: 5.5, petalWidth: 1.8, species: "Iris-virginica", x: 5.5, y: 1.8 },
  { id: 58, sepalLength: 7.7, sepalWidth: 3.8, petalLength: 6.7, petalWidth: 2.2, species: "Iris-virginica", x: 6.7, y: 2.2 },
  { id: 59, sepalLength: 7.7, sepalWidth: 2.6, petalLength: 6.9, petalWidth: 2.3, species: "Iris-virginica", x: 6.9, y: 2.3 },
  { id: 60, sepalLength: 6.0, sepalWidth: 2.2, petalLength: 5.0, petalWidth: 1.5, species: "Iris-virginica", x: 5.0, y: 1.5 }
];

// Classic Mall Customers Dataset (Annual Income vs Spending Score)
// Standard benchmark dataset for customer market segmentation
export const MALL_CUSTOMERS_DATA = [
  // Low Income, Low Spending (Careful)
  { id: 1, customerId: 1, gender: "Male", age: 19, annualIncome: 15, spendingScore: 39, x: 15, y: 39 },
  { id: 2, customerId: 3, gender: "Female", age: 20, annualIncome: 16, spendingScore: 6, x: 16, y: 6 },
  { id: 3, customerId: 5, gender: "Female", age: 31, annualIncome: 17, spendingScore: 40, x: 17, y: 40 },
  { id: 4, customerId: 7, gender: "Female", age: 35, annualIncome: 18, spendingScore: 6, x: 18, y: 6 },
  { id: 5, customerId: 9, gender: "Male", age: 64, annualIncome: 19, spendingScore: 3, x: 19, y: 3 },
  { id: 6, customerId: 11, gender: "Female", age: 30, annualIncome: 19, spendingScore: 14, x: 19, y: 14 },
  { id: 7, customerId: 13, gender: "Female", age: 58, annualIncome: 20, spendingScore: 15, x: 20, y: 15 },
  { id: 8, customerId: 15, gender: "Male", age: 37, annualIncome: 20, spendingScore: 13, x: 20, y: 13 },
  { id: 9, customerId: 17, gender: "Female", age: 35, annualIncome: 21, spendingScore: 35, x: 21, y: 35 },
  { id: 10, customerId: 21, gender: "Male", age: 35, annualIncome: 24, spendingScore: 35, x: 24, y: 35 },

  // Low Income, High Spending (Careless / Impulsive)
  { id: 11, customerId: 2, gender: "Male", age: 21, annualIncome: 15, spendingScore: 81, x: 15, y: 81 },
  { id: 12, customerId: 4, gender: "Female", age: 23, annualIncome: 16, spendingScore: 77, x: 16, y: 77 },
  { id: 13, customerId: 6, gender: "Female", age: 22, annualIncome: 17, spendingScore: 76, x: 17, y: 76 },
  { id: 14, customerId: 8, gender: "Female", age: 23, annualIncome: 18, spendingScore: 94, x: 18, y: 94 },
  { id: 15, customerId: 10, gender: "Female", age: 30, annualIncome: 19, spendingScore: 72, x: 19, y: 72 },
  { id: 16, customerId: 12, gender: "Female", age: 35, annualIncome: 19, spendingScore: 99, x: 19, y: 99 },
  { id: 17, customerId: 14, gender: "Female", age: 24, annualIncome: 20, spendingScore: 77, x: 20, y: 77 },
  { id: 18, customerId: 16, gender: "Male", age: 22, annualIncome: 20, spendingScore: 79, x: 20, y: 79 },
  { id: 19, customerId: 18, gender: "Male", age: 20, annualIncome: 21, spendingScore: 66, x: 21, y: 66 },
  { id: 20, customerId: 22, gender: "Male", age: 25, annualIncome: 24, spendingScore: 73, x: 24, y: 73 },

  // Medium Income, Medium Spending (Average / Standard)
  { id: 21, customerId: 44, gender: "Female", age: 31, annualIncome: 39, spendingScore: 61, x: 39, y: 61 },
  { id: 22, customerId: 47, gender: "Female", age: 50, annualIncome: 40, spendingScore: 55, x: 40, y: 55 },
  { id: 23, customerId: 50, gender: "Female", age: 38, annualIncome: 40, spendingScore: 42, x: 40, y: 42 },
  { id: 24, customerId: 54, gender: "Male", age: 59, annualIncome: 43, spendingScore: 60, x: 43, y: 60 },
  { id: 25, customerId: 58, gender: "Male", age: 69, annualIncome: 44, spendingScore: 46, x: 44, y: 46 },
  { id: 26, customerId: 62, gender: "Male", age: 19, annualIncome: 46, spendingScore: 55, x: 46, y: 55 },
  { id: 27, customerId: 66, gender: "Female", age: 18, annualIncome: 48, spendingScore: 59, x: 48, y: 59 },
  { id: 28, customerId: 70, gender: "Female", age: 32, annualIncome: 48, spendingScore: 47, x: 48, y: 47 },
  { id: 29, customerId: 75, gender: "Male", age: 59, annualIncome: 54, spendingScore: 47, x: 54, y: 47 },
  { id: 30, customerId: 80, gender: "Female", age: 49, annualIncome: 54, spendingScore: 42, x: 54, y: 42 },
  { id: 31, customerId: 85, gender: "Female", age: 21, annualIncome: 54, spendingScore: 57, x: 54, y: 57 },
  { id: 32, customerId: 90, gender: "Female", age: 50, annualIncome: 58, spendingScore: 46, x: 58, y: 46 },
  { id: 33, customerId: 95, gender: "Female", age: 32, annualIncome: 60, spendingScore: 42, x: 60, y: 42 },
  { id: 34, customerId: 100, gender: "Male", age: 20, annualIncome: 61, spendingScore: 49, x: 61, y: 49 },
  { id: 35, customerId: 105, gender: "Male", age: 49, annualIncome: 62, spendingScore: 56, x: 62, y: 56 },

  // High Income, Low Spending (Sensible / Frugal)
  { id: 36, customerId: 125, gender: "Female", age: 23, annualIncome: 70, spendingScore: 29, x: 70, y: 29 },
  { id: 37, customerId: 129, gender: "Male", age: 59, annualIncome: 71, spendingScore: 11, x: 71, y: 11 },
  { id: 38, customerId: 131, gender: "Male", age: 47, annualIncome: 71, spendingScore: 9, x: 71, y: 9 },
  { id: 39, customerId: 135, gender: "Male", age: 20, annualIncome: 73, spendingScore: 5, x: 73, y: 5 },
  { id: 40, customerId: 137, gender: "Female", age: 44, annualIncome: 73, spendingScore: 7, x: 73, y: 7 },
  { id: 41, customerId: 141, gender: "Female", age: 57, annualIncome: 75, spendingScore: 5, x: 75, y: 5 },
  { id: 42, customerId: 145, gender: "Male", age: 28, annualIncome: 77, spendingScore: 12, x: 77, y: 12 },
  { id: 43, customerId: 149, gender: "Female", age: 34, annualIncome: 78, spendingScore: 22, x: 78, y: 22 },
  { id: 44, customerId: 153, gender: "Female", age: 38, annualIncome: 78, spendingScore: 16, x: 78, y: 16 },
  { id: 45, customerId: 157, gender: "Male", age: 37, annualIncome: 78, spendingScore: 1, x: 78, y: 1 },

  // High Income, High Spending (Target / Premium Customers)
  { id: 46, customerId: 124, gender: "Male", age: 39, annualIncome: 69, spendingScore: 91, x: 69, y: 91 },
  { id: 47, customerId: 126, gender: "Female", age: 31, annualIncome: 70, spendingScore: 77, x: 70, y: 77 },
  { id: 48, customerId: 128, gender: "Male", age: 40, annualIncome: 71, spendingScore: 95, x: 71, y: 95 },
  { id: 49, customerId: 130, gender: "Male", age: 38, annualIncome: 71, spendingScore: 75, x: 71, y: 75 },
  { id: 50, customerId: 132, gender: "Male", age: 39, annualIncome: 71, spendingScore: 75, x: 71, y: 75 },
  { id: 51, customerId: 136, gender: "Female", age: 29, annualIncome: 73, spendingScore: 88, x: 73, y: 88 },
  { id: 52, customerId: 140, gender: "Female", age: 35, annualIncome: 74, spendingScore: 72, x: 74, y: 72 },
  { id: 53, customerId: 144, gender: "Male", age: 32, annualIncome: 75, spendingScore: 93, x: 75, y: 93 },
  { id: 54, customerId: 146, gender: "Male", age: 28, annualIncome: 77, spendingScore: 97, x: 77, y: 97 },
  { id: 55, customerId: 150, gender: "Male", age: 34, annualIncome: 78, spendingScore: 90, x: 78, y: 90 },
  { id: 56, customerId: 152, gender: "Male", age: 33, annualIncome: 78, spendingScore: 88, x: 78, y: 88 },
  { id: 57, customerId: 154, gender: "Female", age: 38, annualIncome: 78, spendingScore: 76, x: 78, y: 76 },
  { id: 58, customerId: 156, gender: "Female", age: 27, annualIncome: 78, spendingScore: 89, x: 78, y: 89 },
  { id: 59, customerId: 158, gender: "Female", age: 34, annualIncome: 78, spendingScore: 78, x: 78, y: 78 },
  { id: 60, customerId: 160, gender: "Female", age: 30, annualIncome: 79, spendingScore: 83, x: 79, y: 83 }
];

// Helper to generate a realistic clustered random dataset
export function generateRandomDataset(seed = Date.now()) {
  const centers = [
    { cx: 20, cy: 30, spread: 8 },
    { cx: 75, cy: 25, spread: 9 },
    { cx: 35, cy: 75, spread: 8 },
    { cx: 80, cy: 80, spread: 10 }
  ];

  let idCounter = 1;
  const points = [];

  centers.forEach((c) => {
    // Generate ~15 points per center
    for (let i = 0; i < 15; i++) {
      // Box-Muller transform for normal distribution
      const u1 = Math.random();
      const u2 = Math.random();
      const z0 = Math.sqrt(-2.0 * Math.log(u1 || 0.001)) * Math.cos(2.0 * Math.PI * u2);
      const z1 = Math.sqrt(-2.0 * Math.log(u1 || 0.001)) * Math.sin(2.0 * Math.PI * u2);

      const x = Math.max(5, Math.min(95, parseFloat((c.cx + z0 * c.spread).toFixed(1))));
      const y = Math.max(5, Math.min(95, parseFloat((c.cy + z1 * c.spread).toFixed(1))));

      points.push({
        id: idCounter,
        pointId: `P${idCounter}`,
        feature1: x,
        feature2: y,
        x: x,
        y: y
      });
      idCounter++;
    }
  });

  return points;
}

export const DATASETS = {
  iris: {
    id: "iris",
    name: "Iris Dataset",
    description: "Classic botanical dataset. We analyze Petal Length (cm) vs Petal Width (cm) to partition flowers into natural species clusters.",
    xAxisLabel: "Petal Length (cm)",
    yAxisLabel: "Petal Width (cm)",
    columns: ["ID", "Sepal Length", "Sepal Width", "Petal Length (x)", "Petal Width (y)", "Species"],
    getRowValues: (row) => [row.id, row.sepalLength, row.sepalWidth, row.petalLength, row.petalWidth, row.species],
    data: IRIS_DATA
  },
  mall: {
    id: "mall",
    name: "Mall Customers Dataset",
    description: "Retail customer benchmark dataset. Used for customer segmentation based on Annual Income (k$) and Spending Score (1-100).",
    xAxisLabel: "Annual Income (k$)",
    yAxisLabel: "Spending Score (1-100)",
    columns: ["Cust ID", "Gender", "Age", "Annual Income (k$) (x)", "Spending Score (y)"],
    getRowValues: (row) => [row.customerId, row.gender, row.age, row.annualIncome, row.spendingScore],
    data: MALL_CUSTOMERS_DATA
  },
  random: {
    id: "random",
    name: "Randomly Generated Dataset",
    description: "Synthetically synthesized 2D clusters generated dynamically using Gaussian distribution across feature space.",
    xAxisLabel: "Feature X (Normalized 0-100)",
    yAxisLabel: "Feature Y (Normalized 0-100)",
    columns: ["Point ID", "Feature X (x)", "Feature Y (y)"],
    getRowValues: (row) => [row.pointId, row.feature1, row.feature2],
    data: generateRandomDataset()
  }
};
