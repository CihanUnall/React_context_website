import { UserContext } from "../context/UserContext";
import React, { useContext } from "react";

const Display = () => {
  const { name, location } = useContext(UserContext);
  return (
    <div className="display">
      <div className="display-field">
        <span className="display-label">Name</span>: {name}
        {/* display the name here */}
      </div>
      <div className="display-field">
        <span className="display-label">Location</span>:{location}
        {/* display the location here */}
      </div>
    </div>
  );
};

export default Display;
