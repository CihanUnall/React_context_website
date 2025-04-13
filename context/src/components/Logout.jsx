// src/components/Logout.jsx
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { setIsAuthenticated } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <button onClick={handleLogout} className="logout">
      Logout
    </button>
  );
};

export default Logout;
