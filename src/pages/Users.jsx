// src/pages/Users.js
import React, { useEffect, useState } from "react";
import UserList from "../components/UserList";
import UserForm from "../components/UserForm";
import { getUsers } from "../api";

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
      <h1>Add Users</h1>
      <UserForm onSuccess={() => getList()} />
      <UserList users={users} onSuccess={() => getList()} />
    </div>
  );
};

export default Users;
