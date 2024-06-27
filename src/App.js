import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Allergies from "./pages/Allergies";
import Maladies from "./pages/Maladies";
import Users from "./pages/Users";
import AdminLogin from "./pages/AdminLogin";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/AdminLogin" />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/allergies" element={<Allergies />} />
        <Route path="/maladies" element={<Maladies />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  );
};

export default App;
