import { useState, createContext } from "react";
import NavLinks from "./NavLinks";

//create the context
export const NavbarContext = createContext();

function Navbar() {
  const defaultUser = { name: "John Doe" };
  const [user, setUser] = useState(defaultUser);
  //logout function
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
