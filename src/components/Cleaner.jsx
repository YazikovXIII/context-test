import { useContext } from "react";
import { UserContext } from "../lib/UserContext";

export const Cleaner = () => {
  const { setUser } = useContext(UserContext);

  const onClick = () => {
    localStorage.clear();
    setUser({ name: "John Doe" });
  };

  return <button onClick={onClick}>Clean names</button>;
};
