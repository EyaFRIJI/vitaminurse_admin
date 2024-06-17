// src/components/MaladieList.js
import React, { useEffect, useState } from "react";
import { getMaladies } from "../api";

const MaladieList = () => {
  const [maladies, setMaladies] = useState([]);

  useEffect(() => {
    getMaladies().then((response) => setMaladies(response.data));
  }, []);

  return (
    <div>
      <h2>Maladies</h2>
      <ul>
        {maladies.map((maladie) => (
          <li key={maladie._id}>{maladie.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MaladieList;
