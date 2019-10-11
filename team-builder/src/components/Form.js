import React from "react";
import Person from "./Person.js";

export default function Form(props) {
  const [user, setUser] = React.useState({ username: "", email: "", role: "" });

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addPersonFn(user);
  };

  return (
    <div>
      {console.log(user)}
      <form onSubmit={e => handleSubmit(e)}>
        <label>Name:</label>
        <input
          type="text"
          name="username"
          onChange={e => handleChange(e)}
          value={user.username}
        />
        <label>Email:</label>
        <input
          type="text"
          name="email"
          onChange={e => handleChange(e)}
          value={user.email}
        />
        <label>Role:</label>
        <input
          type="text"
          name="role"
          onChange={e => handleChange(e)}
          value={user.role}
        />
        <button>Submit!</button>
      </form>
    </div>
  );
}
