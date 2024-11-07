import React, { useState } from "react";
import Card from "../UI/Card";
import "./AddUser.css";
import Button from "../UI/Button";

const AddUser = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredName, enteredAge);

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
              value={setEnteredName}
              onChange={nameChangeHandlter}
            ></input>
          </div>

          <div className="input">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              value={setEnteredAge}
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
