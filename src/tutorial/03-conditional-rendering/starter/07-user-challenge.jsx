import { useState } from "react";

const UserChallenge = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    if (!isLoggedIn) {
      console.log("Fetching user data ...");
      fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => response.json())
        .then((data) => setUser(data));
    } else {
      console.log("Destroying user data ...");
      setUser(null);
    }
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <div>
      <h2>user challenge</h2>
      <button className="btn" onClick={handleLogin} style={{marginBottom:"14px"}}>
        {isLoggedIn ? "logout" : "login"}
      </button>
      {isLoggedIn ? <UserCard {...user} /> : <Guest />}
    </div>
  );
};

const UserCard = ({ name, email, phone }) => {
  return (
    <div>
      <h4 className="">{name}</h4>
      <h5>
        reach me at {email} | {phone}
      </h5>
    </div>
  );
};

const Guest = () => {
  return <h5>Login to see magic !</h5>;
};
export default UserChallenge;
