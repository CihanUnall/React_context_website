import { UserContext } from "../context/UserContext";
import React, { useContext } from "react";

const UserForm = () => {
  const { name, setName, location, setLocation } = useContext(UserContext);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div>
      <div className="input-item">
        <label htmlFor="name">Username: </label>
        <input id="name" name="name" onChange={handleNameChange} value={name} />
      </div>

      <div className="input-item">
        <label htmlFor="location">Location: </label>
        <input
          id="location"
          name="location"
          onChange={handleLocationChange}
          value={location}
        />
      </div>
    </div>
  );
};

export default UserForm;
