// src/components/UserList.js
import React, { useEffect, useState } from "react";
import { getUsers } from "../api";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((response) => setUsers(response.data));
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.nom} {user.prenom} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
