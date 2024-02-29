import React, { useState, useContext } from "react";
import { UserContext } from "../lib/UserContext";
import { Cleaner } from "./Cleaner";

const UserForm = () => {
  const [name, setName] = useState("");
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ name });
    setName("");
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
      <Cleaner />
    </div>
  );
};

export default UserForm;
