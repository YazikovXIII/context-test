import { useContext } from "react";
import { UserContext } from "../lib/UserContext";

export const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <div className="App-header">
        <div
          className="nav
        "
        >
          <a className="App-link" href="/">
            Home
          </a>
          <a className="App-link" href="/profile">
            Profile
          </a>
        </div>
        <div>
          <p>{user.name}</p>
        </div>
      </div>
    </>
  );
};
