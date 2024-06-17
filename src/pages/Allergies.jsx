// src/pages/Allergies.js
import React from "react";
import AllergieList from "../components/AllergieList";
import AllergieForm from "../components/AllergieForm";

const Allergies = () => {
  return (
    <div>
      <h1>Allergies Page</h1>
      <AllergieForm />
      <AllergieList />
    </div>
  );
};

export default Allergies;
