// src/pages/Users.js
import React from "react";
import UserList from "../components/UserList";
import UserForm from "../components/UserForm";

const Users = () => {
  return (
    <div>
      <h1>Users Page</h1>
      <UserForm />
      <UserList />
    </div>
  );
};

export default Users;
