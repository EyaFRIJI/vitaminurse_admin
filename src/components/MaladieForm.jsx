// src/components/MaladieForm.js
import React, { useState } from "react";
import { createMaladie } from "../api";

const MaladieForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    ocr: "",
    max: 0,
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
    createMaladie(formData).then(() => {
      setFormData({
        name: "",
        ocr: "",
        max: 0,
      });
      onSuccess();
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Maladie Name"
      />
      <input
        type="text"
        name="ocr"
        value={formData.ocr}
        onChange={handleChange}
        placeholder="OCR"
      />
      <input
        type="number"
        name="max"
        value={formData.max}
        onChange={handleChange}
        placeholder="Max"
      />
      <button type="submit">Add Maladie</button>
    </form>
  );
};

export default MaladieForm;
