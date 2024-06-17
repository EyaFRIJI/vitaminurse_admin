import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Allergies from "./pages/Allergies";
import Maladies from "./pages/Maladies";
import Users from "./pages/Users";

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/allergies">Allergies</Link>
          </li>
          <li>
            <Link to="/maladies">Maladies</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <a
              href="https://console.firebase.google.com/project/vitaminurse-app/firestore/databases/-default-/data/~2FProduits~2F0000040144405?utm_campaign=welcome_2021_CTA_A&utm_medium=email&utm_source=welcome"
              target="_blank"
              rel="noopener noreferrer"
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
