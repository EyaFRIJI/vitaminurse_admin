// src/components/AdminLogin.js
import React, { useState } from "react";
import logo from "../assets/logo.png"; // Assurez-vous de corriger le chemin vers votre logo
import { Link } from "react-router-dom";

const AdminLogin = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    mot_passe: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici votre logique de connexion
    console.log(formData);
    onLogin();
  };

  return (
    <div style={styles.loginContainer}>
      <div style={styles.loginBox}>
        <img src={logo} alt="Logo" style={styles.logo} />
        <h1 style={styles.h1}>Vitaminurse</h1>
        <h3 style={styles.h3}>Admin Login</h3>
        <form onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="email">
              Email
            </label>
            <input
              style={styles.input}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="mot_passe">
              Mot de passe
            </label>
            <input
              style={styles.input}
              type="password"
              name="mot_passe"
              value={formData.mot_passe}
              onChange={handleChange}
              placeholder="Mot de passe"
            />
          </div>
          <button type="submit" style={styles.button}>
            <Link to="/allergies" style={linkStyle}>
              Se connecter
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
};
const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "1.2rem",
};

const styles = {
  loginContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#59b77d",
    margin: 0,
    padding: 0,
    fontFamily: "Arial, sans-serif",
  },
  loginBox: {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "300px",
  },
  logo: {
    width: "100px",
  },
  h1: {
    color: "#1a4d2e",
  },
  h3: {
    marginBottom: "1.5rem",
    color: "#59b77d",
  },
  inputGroup: {
    marginBottom: "1rem",
    textAlign: "left",
  },
  label: {
    display: "block",
    marginBottom: "0.5rem",
    color: "#1a4d2e",
  },
  input: {
    width: "100%",
    padding: "0.5rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    width: "100%",
    padding: "0.75rem",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#1a4d2e",
    color: "white",
    fontSize: "1rem",
    cursor: "pointer",
  },
  buttonHover: {
    backgroundColor: "#15533b",
  },
};

export default AdminLogin;
