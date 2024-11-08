import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (UName, UAge) => {
    setUserList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: UName, age: UAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userList} />
    </div>
  );
}

export default App;
