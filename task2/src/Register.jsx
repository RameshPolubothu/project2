import React, { useState } from "react";
import { auth } from "./Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
const Register = () => {
  const register = async ({ email, password }) => {
    try {
      const resp = await createUserWithEmailAndPassword(auth, email, password);
      alert(`User registered successfully: ${resp.user.email}`);
    } catch (error) {
      console.error("Registration error:", error);
      alert("Registration error:", error);
      throw error;
    }
  };
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(form);
  };
  const InputFields = {
    padding: "0.5rem",
    margin: "0.8rem",
    borderRadius: "4px",
  };
  const ButtonStyle = {
    borderRadius: "4px",
    padding: "0.7rem",
    margin: "0.5rem",
  };
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          style={InputFields}
          placeholder="email"
          id="mail"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          style={InputFields}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <br />
        <button type="submit" style={ButtonStyle}>
          Submit
        </button>
      </form>
      <a href="/login">Login</a>
    </div>
  );
};

export default Register;
