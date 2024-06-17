// src/components/UserForm.js
import React, { useState } from "react";
import { createUser } from "../api";

const UserForm = () => {
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
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nom"
        value={formData.nom}
        onChange={handleChange}
        placeholder="Nom"
      />
      <input
        type="text"
        name="prenom"
        value={formData.prenom}
        onChange={handleChange}
        placeholder="Prenom"
      />
      <input
        type="number"
        name="poids"
        value={formData.poids}
        onChange={handleChange}
        placeholder="Poids"
      />
      <input
        type="number"
        name="taille"
        value={formData.taille}
        onChange={handleChange}
        placeholder="Taille"
      />
      <input
        type="date"
        name="date_naissance"
        value={formData.date_naissance}
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="mot_passe"
        value={formData.mot_passe}
        onChange={handleChange}
        placeholder="Mot de passe"
      />
      <input
        type="text"
        name="tel"
        value={formData.tel}
        onChange={handleChange}
        placeholder="Téléphone"
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
