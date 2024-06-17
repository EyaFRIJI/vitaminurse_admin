// src/components/AllergieList.js
import React, { useEffect, useState } from "react";
import { getAllergies } from "../api";

const AllergieList = () => {
  const [allergies, setAllergies] = useState([]);

  useEffect(() => {
    getAllergies().then((response) => setAllergies(response.data));
  }, []);

  return (
    <div>
      <h2>Allergies</h2>
      <ul>
        {allergies.map((allergie) => (
          <li key={allergie._id}>{allergie.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AllergieList;
