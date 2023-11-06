import { useState, createContext } from "react";
import NavLinks from "./NavLinks";

export const NavbarContext = createContext();

function Navbar() {
  const defaultUser = { name: "John Doe" };
  const [user, setUser] = useState(defaultUser);
  const logout = () => {
    setUser(null);
    console.log("You have been logged out");
  };
  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className="navbar">
        <h5>Context API</h5>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  );
}

export default Navbar;
