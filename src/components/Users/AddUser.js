import React from "react";
import Card from "../UI/Card";
import "./AddUser.css";
import Button from "../UI/Button";

const AddUser = () => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="input">
      <Card className="card ">
        <form onSubmit={addUserHandler}>
          <div className="input">
            <label htmlFor="username">UserName</label>
            <input type="text" id="username"></input>
          </div>

          <div className="input">
            <label htmlFor="age">Age</label>
            <input type="number" id="age"></input>
          </div>

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
