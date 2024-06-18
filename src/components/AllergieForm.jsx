import React, { useState } from "react";
import { createAllergie } from "../api";

const AllergieForm = ({ onSuccess }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createAllergie({ name }).then(() => {
      setName("");
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
        <label htmlFor="allergieName" style={labelStyle}>
          Allergie Name
        </label>
        <input
          id="allergieName"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter allergie name"
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
        Add Allergie
      </button>
    </form>
  );
};

export default AllergieForm;
