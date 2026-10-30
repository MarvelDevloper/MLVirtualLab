import React from "react";

export default function Navbar({ backendStatus }) {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <div className="logo-icon">VLAB</div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <h1 className="navbar-title">K-Means Clustering Virtual Lab</h1>
              <span
                style={{
                  display: "inline-block",
                  width: "9px",
                  height: "9px",
                  borderRadius: "50%",
                  backgroundColor: backendStatus === "connected" ? "#10b981" : "#94a3b8"
                }}
                title={backendStatus === "connected" ? "Backend API Online" : "Local Engine Active"}
              />
            </div>
            <span className="navbar-subtitle">College CA Practical Assignment • Machine Learning</span>
          </div>
        </div>

        <nav className="navbar-links">
          <button onClick={() => scrollTo("theory")} className="nav-link">Theory</button>
          <button onClick={() => scrollTo("dataset")} className="nav-link">Dataset</button>
          <button onClick={() => scrollTo("model")} className="nav-link">Model Config</button>
          <button onClick={() => scrollTo("results")} className="nav-link">Results</button>
          <button onClick={() => scrollTo("visualization")} className="nav-link">Visualization</button>
          <button onClick={() => scrollTo("conclusion")} className="nav-link">Conclusion</button>
        </nav>
      </div>
    </header>
  );
}
