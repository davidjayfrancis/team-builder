import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form.js";
import Person from "./components/Person.js";

let data = [
  {
    name: "David",
    email: "davidjayfrancis@gmail.com",
    role: "developer"
  },
  {
    name: "Navid",
    email: "coolnavid@gmail.com",
    role: "supreme leader"
  }
];
function App() {
  const [team, setTeam] = React.useState(data);

  const addPerson = p => {
    const newPerson = {
      username: p.username,
      email: p.email,
      role: p.role
    };
    setTeam([...team, newPerson]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Super Duper Form Capacitator</h1>
        <Form addPersonFn={addPerson} />
        {team.map(person => {
          return (
            <Person
              name={person.username}
              email={person.email}
              role={person.role}
            />
          );
        })}
      </header>
    </div>
  );
}

export default App;
