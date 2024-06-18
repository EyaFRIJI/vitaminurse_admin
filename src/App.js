import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Allergies from "./pages/Allergies";
import Maladies from "./pages/Maladies";
import Users from "./pages/Users";

const App = () => {
  const navStyle = {
    background: "#1A4D2E",
    padding: "1rem",
  };

  const ulStyle = {
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-around",
    margin: 0,
    padding: 0,
  };

  const liStyle = {
    margin: "0 1rem",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "1.2rem",
  };

  return (
    <Router>
      <nav style={navStyle}>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <Link to="/allergies" style={linkStyle}>
              Allergies
            </Link>
          </li>
          <li style={liStyle}>
            <Link to="/maladies" style={linkStyle}>
              Maladies
            </Link>
          </li>
          <li style={liStyle}>
            <Link to="/users" style={linkStyle}>
              Users
            </Link>
          </li>
          <li style={liStyle}>
            <a
              href="https://console.firebase.google.com/project/vitaminurse-app/firestore/databases/-default-/data/~2FProduits~2F0000040144405?utm_campaign=welcome_2021_CTA_A&utm_medium=email&utm_source=welcome"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              Produits
            </a>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/allergies" element={<Allergies />} />
        <Route path="/maladies" element={<Maladies />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  );
};

export default App;
