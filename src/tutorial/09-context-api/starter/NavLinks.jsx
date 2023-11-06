import UserContainer from "./UserContainer";

function NavLinks() {

  return (
    <div className="nav-container">
      <ul className="nav-links">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
      <UserContainer />
    </div>
  );
}

export default NavLinks;
