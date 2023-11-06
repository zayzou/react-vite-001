import { useContext } from "react";
import { NavbarContext } from "./Navbar";

function UserContainer() {
  const { user, logout } = useContext(NavbarContext);
  console.log(useContext(NavbarContext));
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello There, {user?.name?.toUpperCase()}</p>
          <button type="button" onClick={logout} className="btn">
            logout
          </button>
        </>
      ) : (
        <p>Please login</p>
      )}
    </div>
  );
}

export default UserContainer;
