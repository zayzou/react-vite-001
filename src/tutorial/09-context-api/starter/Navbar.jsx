import { useState } from "react";
import NavLinks from "./NavLinks";

function Navbar() {
  const defaultUser = { name: "John Doe" };
  const [user, setUser] = useState(defaultUser);
  const logout = () => {
    setUser(null);
    alert("You have been logged out");
  };
  return (
    <div className="navbar nav-container">
      <h5>Context API</h5>
      <NavLinks user={user} logout={logout} />
    </div>
  );
}

export default Navbar;
