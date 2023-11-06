import { useAppContext } from "./useAppContext";

function UserContainer() {
  const { user, logout } = useAppContext();

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
