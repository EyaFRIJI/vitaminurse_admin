// src/App.js
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
            <Link to="/users">Produits</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/allergies" element={<Allergies />} />
        <Route path="/maladies" element={<Maladies />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  );
};

export default App;
