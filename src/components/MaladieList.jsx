// src/components/MaladieList.js
import React, { useState } from "react";
import { deleteMaladie } from "../api";

const MaladieList = ({ maladies, onSuccess }) => {
  const [selectedMaladie, setSelectedMaladie] = useState(null);

  const deleteAction = (id) => {
    deleteMaladie(id).then(() => {
      onSuccess();
    });
  };

  const handleUserClick = (maladie) => {
    setSelectedMaladie(maladie);
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
        <h2>List of Maladies</h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {maladies.map((maladie) => (
            <li
              key={maladie._id}
              style={{
                marginBottom: "10px",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                cursor: "pointer",
                backgroundColor:
                  selectedMaladie === maladie ? "#f0f0f0" : "white",
              }}
              onClick={() => handleUserClick(maladie)}
            >
              {maladie.name}
            </li>
          ))}
        </ul>
      </div>

      {selectedMaladie && (
        <div
          style={{
            flex: 1,
            marginLeft: "20px",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          <h3>Maladie details</h3>
          <p>ID: {selectedMaladie._id}</p>
          <p>Name: {selectedMaladie.name}</p>
          <p>Max: {selectedMaladie.max}g</p>
          <p>OCR: {selectedMaladie.ocr}</p>
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
            onClick={() => deleteAction(selectedMaladie._id)}
          >
            Supprimer
          </button>
        </div>
      )}
    </div>
  );
};

export default MaladieList;
