import { useState, useEffect } from "react";
const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) => {
        setUsers(result);
      });
  }, []);

  return (
    <>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </>
  );
};
export default FetchData;
