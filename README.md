# K-Means Clustering Virtual Lab 🧪

An interactive, educational **K-Means Clustering Virtual Laboratory** built for Machine Learning College Continuous Assessment (CA) practical evaluation.

The project is structured with a separated **`backend/`** (Express.js API) and **`frontend/`** (React.js + Vite + Chart.js).

---

## 📁 Project Directory Structure

```text
ML_VirtualLab/
│
├── backend/                  <-- Express.js REST API Server
│   ├── server.js             <-- Express server, CORS & API routes
│   ├── kmeans.js             <-- Pure JavaScript K-Means algorithm implementation
│   ├── datasets.js           <-- Iris, Mall Customers & Gaussian Random datasets
│   ├── package.json          <-- Backend dependencies (express, cors)
│   └── node_modules/
│
├── frontend/                 <-- React.js Single Page Application
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx            <-- Top bar with quick jump links & server indicator
│   │   │   ├── TheorySection.jsx     <-- Section 1: Theory & formulas
│   │   │   ├── DatasetSection.jsx    <-- Section 2: Dataset selector & preview table
│   │   │   ├── ModelSection.jsx      <-- Section 3: K slider & Run Experiment CTA
│   │   │   ├── ResultSection.jsx     <-- Section 4: Cluster counts & Centroids table
│   │   │   ├── VisualizerSection.jsx <-- Section 5: Chart.js 2D Scatter & Bar charts
│   │   │   └── ConclusionSection.jsx <-- Section 6: Dynamic conclusion & viva takeaway
│   │   ├── data/
│   │   │   └── datasets.js           <-- Dataset schemas & fallback definitions
│   │   ├── utils/
│   │   │   └── kmeans.js             <-- Local fallback clustering engine
│   │   ├── App.jsx                   <-- Main React Component with API caller
│   │   ├── App.css                   <-- Clean academic CSS styling with blue accents
│   │   ├── index.css                 <-- Reset & typography
│   │   └── main.jsx                  <-- React DOM entry point
│   ├── index.html
│   ├── package.json          <-- Frontend dependencies (react, chart.js, react-chartjs-2, vite)
│   ├── vite.config.js
│   └── dist/
│
├── package.json              <-- Root package scripts
└── README.md                 <-- Full documentation
```

---

## 🚀 How to Run Locally

### Option A: Run Both Backend & Frontend (Recommended Full-Stack)

1. **Terminal 1 (Backend API on `http://localhost:5000`):**
   ```bash
   cd "c:\Users\sanskar sanas\Downloads\ML_VirtualLab\backend"
   npm start
   ```

2. **Terminal 2 (Frontend App on `http://localhost:5173`):**
   ```bash
   cd "c:\Users\sanskar sanas\Downloads\ML_VirtualLab\frontend"
   npm run dev
   ```

3. Open **`http://localhost:5173`** in your browser. The app displays:
   - `Backend API: Online (Port 5000)`
   - Green connection dot in the navbar.

---

### Option B: Run Frontend Independently (with Built-in Fallback)

The frontend features automatic fallback:
```bash
cd "c:\Users\sanskar sanas\Downloads\ML_VirtualLab\frontend"
npm run dev
```
If the backend is not started, the frontend automatically falls back to its local pure JavaScript K-Means engine without breaking or crashing!

---

## 🔬 Backend API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Server health check and uptime status |
| `GET` | `/api/datasets` | Metadata list for available datasets |
| `GET` | `/api/datasets/:key` | Full data records for a specific dataset (`iris`, `mall`, `random`) |
| `POST` | `/api/datasets/random/regenerate` | Generates a fresh batch of Gaussian random clusters |
| `POST` | `/api/kmeans/run` | Executes K-Means algorithm with chosen \(K\) and returns centroids, clusters, inertia, and iterations |

---

## 🎓 College Viva / Practical Examination Tips

1. **What is K-Means?**
   - Centroid-based partitioning algorithm that divides $N$ data points into $K$ disjoint clusters by minimizing within-cluster Euclidean variance.
2. **Euclidean Distance Formula:**
   $$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$
3. **Centroid Update Formula:**
   $$C_k = \left( \frac{1}{|S_k|} \sum_{p \in S_k} x_p, \; \frac{1}{|S_k|} \sum_{p \in S_k} y_p \right)$$
4. **Where is the algorithm code located?**
   - Backend: [`backend/kmeans.js`](file:///c:/Users/sanskar%20sanas/Downloads/ML_VirtualLab/backend/kmeans.js)
   - Frontend: [`frontend/src/utils/kmeans.js`](file:///c:/Users/sanskar%20sanas/Downloads/ML_VirtualLab/frontend/src/utils/kmeans.js)
   - Both are written in clear, commented JavaScript without opaque external ML packages.
