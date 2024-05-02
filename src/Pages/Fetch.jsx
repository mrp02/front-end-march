import React, { useState } from "react";
import axios from "axios";
// import { useState } from "react";

const Fetch = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  let URL = "http://localhost:8000/students/registerUser";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, password);
    axios.post(URL, { firstName, lastName, email, password })
      .then((res) => {
        console.log(res);
        console.log("user sign in succefully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form action="" className="mx-auto">
        <input
          className="border-2"
          type="text"
          name="firstName"
          id="firstName"
          onChange={(e) => setFirstName(e.target.value)}
        />

        <input
        className="border-2"
        type="text"
        name="lastName"
        id="lastName"
        onChange={(e) => setLastName(e.target.value)}
        />

        <input
          lassName="border-2"
        type="text"
        name="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="border-2"
          type="text"
          name="password"
          id="password"
          onclick={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleSubmit}>submit</button>
      </form>
    </div>
  );
};

export default Fetch;
