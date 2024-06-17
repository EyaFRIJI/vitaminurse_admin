// src/components/AllergieList.js
import React, { useEffect, useState } from "react";
import { deleteAllergie } from "../api";

const AllergieList = ({ allergies, onSuccess }) => {
  const deleteAction = (id) => {
    deleteAllergie(id).then((data) => {
      onSuccess();
    });
  };
  return (
    <div>
      <h2>Allergies</h2>
      <ul>
        {allergies.map((allergie) => (
          <li
            onClick={() => {
              console.log(`Clicked on ${allergie.name}`);
            }}
            style={{ marginBottom: "10px", cursor: "pointer" }}
            key={allergie._id}
          >
            {allergie.name}{" "}
            <button
              onClick={() => {
                deleteAction(allergie._id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllergieList;
