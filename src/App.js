import { useState } from "react";
import "./App.css";
import RegistrationForm from "./Components/RegistrationForm";
import Tables from "./Components/Tables";

const User = [
  {
    id: "u1",
    fullname: "kawaljeet",
    username: " kawal1562",
    email: "kawal1562@gmail.com",
    phoneno: "2324424424",
    password: "123",
  },
  {
    id: "u2",
    fullname: "preet",
    username: " preet55",
    email: "preet55@gmail.com",
    phoneno: "2324424424",
    password: "123",
  },
  {
    id: "u3",
    fullname: "jeet",
    username: " JEETl1562",
    email: "jeet565@gmail.com",
    phoneno: "2324424424",
    password: "123",
  },
];

function App() {
  const [users, setUsers] = useState(User);

  const addUserHandler = (users) => {
    setUsers((prevUsers) => {
      return [users, ...prevUsers];
    });

    console.log(users);
  };

  return (
    <div className="App">
      <RegistrationForm onAddUser={addUserHandler} />
      <Tables items={users} />
    </div>
  );
}

export default App;
