import React, { useState, useContext } from "react";
import { UserContext } from "../lib/UserContext";

const UserForm = () => {
  const [name, setName] = useState("");
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ name });
  };

  return (
    <div className="profile">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <button type="submit">Update Name</button>
      </form>
    </div>
  );
};

export default UserForm;
