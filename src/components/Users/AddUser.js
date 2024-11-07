import React from "react";
const AddUser = () => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">UserName</label>
      <input type="text" id="username"></input>

      <label htmlFor="age">Age</label>
      <input type="number" id="age"></input>

      <button type="submit">Add User</button>
    </form>
  );
};
export default AddUser;
