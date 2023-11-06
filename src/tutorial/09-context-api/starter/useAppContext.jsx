import { useContext } from "react";
import { NavbarContext } from "./Navbar";

//custom hook

export const useAppContext = () => useContext(NavbarContext);
