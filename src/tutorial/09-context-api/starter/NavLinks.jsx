import UserContainer from "./UserContainer";

function NavLinks({ user, logout }) {
  console.log(user, logout);

  return (
    <>
      <div className="nav-links">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </div>
      <UserContainer user={user} logout={logout} />
    </>
  );
}

export default NavLinks;
