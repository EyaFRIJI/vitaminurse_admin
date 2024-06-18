// src/components/UserList.js
import React, { useState } from "react";
import { deleteUser } from "../api";

const UserList = ({ users, onSuccess }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  const deleteAction = (id) => {
    deleteUser(id).then(() => {
      onSuccess();
    });
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div
      style={{
        display: "flex",
        maxWidth: "2000px",
        margin: "auto",
        padding: "20px",
      }}
    >
      <div style={{ flex: 1 }}>
        <h2>List of Users</h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {users.map((user) => (
            <li
              key={user._id}
              style={{
                marginBottom: "10px",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                cursor: "pointer",
                backgroundColor: selectedUser === user ? "#f0f0f0" : "white",
              }}
              onClick={() => handleUserClick(user)}
            >
              {user.nom} {user.prenom}
            </li>
          ))}
        </ul>
      </div>

      {selectedUser && (
        <div
          style={{
            flex: 1,
            marginLeft: "20px",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          <h3>User details</h3>
          <p>ID: {selectedUser._id}</p>
          <p>Name: {selectedUser.nom}</p>
          <p>Surname: {selectedUser.prenom}</p>
          <p>Email: {selectedUser.email}</p>
          <p>Phone: {selectedUser.tel}</p>
          <p>Weight: {selectedUser.poids}kg</p>
          <p>Hight: {selectedUser.taille}cm</p>
          <p>Date of birth : {selectedUser.date_naissance}</p>
          <p>Creation date : {selectedUser.cree_le}</p>
          <p>Diseases : {selectedUser.maladies}</p>
          <p>Allergies : {selectedUser.allergies}</p>
          <button
            style={{
              backgroundColor: "#f44336",
              color: "white",
              border: "none",
              padding: "8px 16px",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "10px",
            }}
            onClick={() => deleteAction(selectedUser._id)}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default UserList;
