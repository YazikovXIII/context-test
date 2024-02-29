import { useContext } from "react";
import { UserContext } from "../lib/UserContext";

export const ProfileHero = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <div className="profile">
        <h1>{user.name}</h1>
      </div>
    </>
  );
};
