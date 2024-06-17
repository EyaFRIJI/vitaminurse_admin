// src/components/AllergieForm.js
import React, { useState } from "react";
import { createAllergie } from "../api";

const AllergieForm = ({ onSuccess }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createAllergie({ name }).then(() => {
      setName("");
      onSuccess();
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Allergie Name"
      />
      <button type="submit">Add Allergie</button>
    </form>
  );
};

export default AllergieForm;
