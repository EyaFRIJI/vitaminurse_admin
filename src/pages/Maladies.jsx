// src/pages/Maladies.js
import React, { useEffect, useState } from "react";
import MaladieList from "../components/MaladieList";
import MaladieForm from "../components/MaladieForm";
import { getMaladies } from "../api";

const Maladies = () => {
  const [maladies, setMaladies] = useState([]);

  const getList = () => {
    getMaladies().then((response) => setMaladies(response.data));
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div>
      <h1>Add Maladies</h1>
      <MaladieForm onSuccess={() => getList()} />
      <MaladieList maladies={maladies} onSuccess={() => getList()} />
    </div>
  );
};

export default Maladies;
