import { useState } from "react";
import NavLinks from "./NavLinks";

function Navbar() {
  const defaultUser = { name: "John Doe" };
  const [user, setUser] = useState(defaultUser);
  const logout = () => {
    setUser(null);
    console.log("You have been logged out");
  };
  return (
    <nav className="navbar">
      <h5>Context API</h5>
      <NavLinks user={user} logout={logout} />
    </nav>
  );
}

export default Navbar;
