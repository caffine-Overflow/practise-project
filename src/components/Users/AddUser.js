import React, { useState } from "react";
import Card from "../UI/Card";
import "./AddUser.css";
import Button from "../UI/Button";
import ErrorModal from "./ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age",
      });
      return;
    }
    if (enteredAge < 1) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid age ",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);

    setEnteredName("");
    setEnteredAge("");
  };
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className="card">
        <form onSubmit={addUserHandler}>
          <div className="input">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={enteredUsername}
              onChange={nameChangeHandler}
            />
          </div>
          <div className="input">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              value={enteredAge}
              onChange={ageChangeHandler}
            />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
