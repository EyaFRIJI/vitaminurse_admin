// src/pages/Allergies.js
import React, { useEffect, useState } from "react";

import AllergieList from "../components/AllergieList";
import AllergieForm from "../components/AllergieForm";
import { getAllergies } from "../api";
const Allergies = () => {
  const [allergies, setAllergies] = useState([]);

  const getList = () => {
    getAllergies().then((response) => setAllergies(response.data));
  };
  useEffect(() => {
    getList();
  }, []);
  return (
    <div>
      <h1>Allergies Page</h1>
      <AllergieForm onSuccess={() => getList()} />
      <AllergieList allergies={allergies} onSuccess={() => getList()} />
    </div>
  );
};

export default Allergies;
