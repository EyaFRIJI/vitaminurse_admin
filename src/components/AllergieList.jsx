// src/components/AllergieList.js
import React, { useState } from "react";
import { deleteAllergie } from "../api";

const AllergieList = ({ allergies, onSuccess }) => {
  const [selectedAllergie, setSelectedAllergie] = useState(null);

  const deleteAction = (id) => {
    deleteAllergie(id).then(() => {
      onSuccess();
    });
  };

  const handleUserClick = (allergie) => {
    setSelectedAllergie(allergie);
  };

  return (
    <div
      style={{
        display: "flex",
        maxWidth: "2000px",
        margin: "auto",
        padding: "20px",
      }}
    >
      <div style={{ flex: 1 }}>
        <h2>List of Allergies</h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {allergies.map((allergie) => (
            <li
              key={allergie._id}
              style={{
                marginBottom: "10px",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                cursor: "pointer",
                backgroundColor:
                  selectedAllergie === allergie ? "#f0f0f0" : "white",
              }}
              onClick={() => handleUserClick(allergie)}
            >
              {allergie.name}
            </li>
          ))}
        </ul>
      </div>

      {selectedAllergie && (
        <div
          style={{
            flex: 1,
            marginLeft: "20px",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          <h3>Allergie details</h3>
          <p>ID: {selectedAllergie._id}</p>
          <p>Name: {selectedAllergie.name}</p>
          <button
            style={{
              backgroundColor: "#f44336",
              color: "white",
              border: "none",
              padding: "8px 16px",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "10px",
            }}
            onClick={() => deleteAction(selectedAllergie._id)}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default AllergieList;
