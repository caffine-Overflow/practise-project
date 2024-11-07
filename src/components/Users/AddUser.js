import React, { useState } from "react";
import Card from "../UI/Card";
import "./AddUser.css";
import Button from "../UI/Button";

const AddUser = () => {
  const [enteredUsername, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (enteredAge < 1) {
      return;
    }
    console.log(enteredUsername, enteredAge);

    setEnteredName("");
    setEnteredAge("");
  };
  const nameChangeHandlter = (event) => {
    setEnteredName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  return (
    <div className="input">
      <Card className="card ">
        <form onSubmit={addUserHandler}>
          <div className="input">
            <label htmlFor="username">UserName</label>
            <input
              type="text"
              id="username"
              value={enteredUsername}
              onChange={nameChangeHandlter}
            ></input>
          </div>

          <div className="input">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              value={enteredAge}
              onChange={ageChangeHandler}
            ></input>
          </div>

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
