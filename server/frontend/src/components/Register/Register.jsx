import React, { useState } from "react";
import "./Register.css";

function Register() {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    const res = await fetch("/djangoapp/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName,
        firstName,
        lastName,
        email,
        password,
      }),
    });

    const json = await res.json();

    if (json.userName) {
      sessionStorage.setItem("username", json.userName);
      window.location.href = "/";
    } else {
      alert("Registration failed");
    }
  };

  return (
    <div className="register_container">
      <div className="header">Sign Up</div>

      <div className="inputs">
        <div className="input">
          <input
            type="text"
            className="input_field"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div className="input">
          <input
            type="text"
            className="input_field"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="input">
          <input
            type="text"
            className="input_field"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="input">
          <input
            type="email"
            className="input_field"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input">
          <input
            type="password"
            className="input_field"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <div className="submit_panel">
        <button className="submit" onClick={register}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;