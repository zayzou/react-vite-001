import { useState } from "react";

const ToggleChallenge = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user] = useState({ name: "John" });

  return (
    <div>
      <h2>toggle challenge</h2>
      <button className="btn" onClick={() => setLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
      {isLoggedIn && <User name={user.name} />}
    </div>
  );
};

const User = ({ name }) => (
  <div className="alert alert-success">Hi {name} 👋🏻</div>
);

export default ToggleChallenge;
