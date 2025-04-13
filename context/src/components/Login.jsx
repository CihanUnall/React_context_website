// src/pages/Login.jsx
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { users } from "../data";

const Login = () => {
  const { setIsAuthenticated } = useContext(UserContext);
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userFound = users.find(
      (user) =>
        user.username === form.username && user.password === form.password
    );

    if (userFound) {
      setIsAuthenticated(true);
      navigate("/"); // anasayfaya yönlendir
    } else {
      alert("Username or Password is fals !");
    }
  };

  return (
    <div className="login">
      <div className="login-title">
        <h3>Login Page</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="login-item">
          <label htmlFor="">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
          />
        </div>
        <div className="login-item">
          <label htmlFor=""> Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
