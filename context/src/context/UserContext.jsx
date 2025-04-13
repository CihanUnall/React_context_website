// src/context/UserContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(
    // Sayfa ilk açıldığında localStorage'dan oku
    () => localStorage.getItem("isAuthenticated") === "true"
  );

  // isAuthenticated değiştiğinde localStorage'ı güncelle
  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);

  return (
    <UserContext.Provider
      value={{
        name,
        setName,
        location,
        setLocation,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
