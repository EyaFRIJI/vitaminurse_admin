// src/pages/Users.js
import React, { useEffect, useState } from "react";
import UserList from "../components/UserList";
import UserForm from "../components/UserForm";
import { getUsers } from "../api";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  const getList = () => {
    getUsers().then((response) => setUsers(response.data));
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div>
      <nav style={navStyle}>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <Link to="/allergies" style={linkStyle}>
              Allergies
            </Link>
          </li>
          <li style={liStyle}>
            <Link to="/maladies" style={linkStyle}>
              Maladies
            </Link>
          </li>
          <li style={liStyle}>
            <Link to="/users" style={linkStyle}>
              Users
            </Link>
          </li>
          <li style={liStyle}>
            <a
              href="https://console.firebase.google.com/project/vitaminurse-app/firestore/databases/-default-/data/~2FProduits~2F0000040144405?utm_campaign=welcome_2021_CTA_A&utm_medium=email&utm_source=welcome"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              Produits
            </a>
          </li>
          <li style={liStyle}>
            <Link to="/AdminLogin" style={linkStyle}>
              Disconnect
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <h1>Add Users</h1>
        <UserForm onSuccess={() => getList()} />
        <UserList users={users} onSuccess={() => getList()} />
      </div>
    </div>
  );
};
const navStyle = {
  background: "#1A4D2E",
  padding: "1rem",
};

const ulStyle = {
  listStyleType: "none",
  display: "flex",
  justifyContent: "space-around",
  margin: 0,
  padding: 0,
};

const liStyle = {
  margin: "0 1rem",
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "1.2rem",
};

export default Users;
