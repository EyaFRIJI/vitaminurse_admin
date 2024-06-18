import React, { useState } from "react";
import { createUser } from "../api";

const UserForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    poids: "",
    taille: "",
    date_naissance: "",
    maladies: [],
    allergies: [],
    email: "",
    mot_passe: "",
    tel: "",
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
    createUser(formData).then(() => {
      setFormData({
        nom: "",
        prenom: "",
        poids: "",
        taille: "",
        date_naissance: "",
        maladies: [],
        allergies: [],
        email: "",
        mot_passe: "",
        tel: "",
      });
      if (typeof onSuccess === "function") {
        onSuccess();
      }
    });
  };

  const formStyle = {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "2em",
    background: "#f7f7ff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    border: "1px solid #ccc",
  };

  const formGroupStyle = {
    marginBottom: "1.5em",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "0.5em",
    fontWeight: "600",
    color: "#333",
    fontSize: "1.1em",
  };

  const inputStyle = {
    width: "100%",
    padding: "0.7em",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "1em",
    outline: "none",
    transition: "border-color 0.3s",
  };

  const inputFocusStyle = {
    borderColor: "#007bff",
  };

  const buttonStyle = {
    width: "100%",
    padding: "0.8em",
    backgroundColor: "#28a745",
    border: "none",
    borderRadius: "5px",
    color: "white",
    fontSize: "1.1em",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  const buttonHoverStyle = {
    backgroundColor: "#218838",
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <div style={formGroupStyle}>
        <label htmlFor="nom" style={labelStyle}>
          Nom
        </label>
        <input
          id="nom"
          type="text"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          placeholder="Enter nom"
          style={inputStyle}
          onFocus={(e) =>
            (e.target.style.borderColor = inputFocusStyle.borderColor)
          }
          onBlur={(e) => (e.target.style.borderColor = inputStyle.borderColor)}
        />
      </div>
      <div style={formGroupStyle}>
        <label htmlFor="prenom" style={labelStyle}>
          Prenom
        </label>
        <input
          id="prenom"
          type="text"
          name="prenom"
          value={formData.prenom}
          onChange={handleChange}
          placeholder="Enter prenom"
          style={inputStyle}
          onFocus={(e) =>
            (e.target.style.borderColor = inputFocusStyle.borderColor)
          }
          onBlur={(e) => (e.target.style.borderColor = inputStyle.borderColor)}
        />
      </div>
      <div style={formGroupStyle}>
        <label htmlFor="poids" style={labelStyle}>
          Poids
        </label>
        <input
          id="poids"
          type="number"
          name="poids"
          value={formData.poids}
          onChange={handleChange}
          placeholder="Enter poids"
          style={inputStyle}
          onFocus={(e) =>
            (e.target.style.borderColor = inputFocusStyle.borderColor)
          }
          onBlur={(e) => (e.target.style.borderColor = inputStyle.borderColor)}
        />
      </div>
      <div style={formGroupStyle}>
        <label htmlFor="taille" style={labelStyle}>
          Taille
        </label>
        <input
          id="taille"
          type="number"
          name="taille"
          value={formData.taille}
          onChange={handleChange}
          placeholder="Enter taille"
          style={inputStyle}
          onFocus={(e) =>
            (e.target.style.borderColor = inputFocusStyle.borderColor)
          }
          onBlur={(e) => (e.target.style.borderColor = inputStyle.borderColor)}
        />
      </div>
      <div style={formGroupStyle}>
        <label htmlFor="date_naissance" style={labelStyle}>
          Date de Naissance
        </label>
        <input
          id="date_naissance"
          type="date"
          name="date_naissance"
          value={formData.date_naissance}
          onChange={handleChange}
          style={inputStyle}
          onFocus={(e) =>
            (e.target.style.borderColor = inputFocusStyle.borderColor)
          }
          onBlur={(e) => (e.target.style.borderColor = inputStyle.borderColor)}
        />
      </div>
      <div style={formGroupStyle}>
        <label htmlFor="email" style={labelStyle}>
          Email
        </label>
        <input
          id="email"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
          style={inputStyle}
          onFocus={(e) =>
            (e.target.style.borderColor = inputFocusStyle.borderColor)
          }
          onBlur={(e) => (e.target.style.borderColor = inputStyle.borderColor)}
        />
      </div>
      <div style={formGroupStyle}>
        <label htmlFor="mot_passe" style={labelStyle}>
          Mot de Passe
        </label>
        <input
          id="mot_passe"
          type="password"
          name="mot_passe"
          value={formData.mot_passe}
          onChange={handleChange}
          placeholder="Enter mot de passe"
          style={inputStyle}
          onFocus={(e) =>
            (e.target.style.borderColor = inputFocusStyle.borderColor)
          }
          onBlur={(e) => (e.target.style.borderColor = inputStyle.borderColor)}
        />
      </div>
      <div style={formGroupStyle}>
        <label htmlFor="tel" style={labelStyle}>
          Téléphone
        </label>
        <input
          id="tel"
          type="text"
          name="tel"
          value={formData.tel}
          onChange={handleChange}
          placeholder="Enter téléphone"
          style={inputStyle}
          onFocus={(e) =>
            (e.target.style.borderColor = inputFocusStyle.borderColor)
          }
          onBlur={(e) => (e.target.style.borderColor = inputStyle.borderColor)}
        />
      </div>
      <button
        type="submit"
        style={buttonStyle}
        onMouseOver={(e) =>
          (e.currentTarget.style.backgroundColor =
            buttonHoverStyle.backgroundColor)
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)
        }
      >
        Add User
      </button>
    </form>
  );
};

export default UserForm;
