// src/pages/Maladies.js
import React from "react";
import MaladieList from "../components/MaladieList";
import MaladieForm from "../components/MaladieForm";

const Maladies = () => {
  return (
    <div>
      <h1>Maladies Page</h1>
      <MaladieForm />
      <MaladieList />
    </div>
  );
};

export default Maladies;
