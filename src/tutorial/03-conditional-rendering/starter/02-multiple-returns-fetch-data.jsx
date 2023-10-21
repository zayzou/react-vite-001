import { useEffect, useState } from "react";

// const url = "https://api.github.com/users/QuincyLarson";
const url = "https://jsonplaceholder.typicode.com/users/1";

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  if (user === null) {
    return <h2>Loading ...</h2>;
  }

  return (
    <div className="container">
      <h4>Fetch Data</h4>
      <section className="">
        <img
          src="https://www.course-api.com/images/people/person-4.jpeg"
          alt={user.name}
          className="img"
          style={{ width: "140px", height: "140px", margin: "auto" }}
        />
        <h3>{user.name}</h3>
        <h4>Works at {user.company.name}</h4>
        <h5>
          Find more on <a href={user.website}>{user.website}</a>
        </h5>
        <p>{user.company.catchPhrase}</p>
      </section>
    </div>
  );
};

export default MultipleReturnsFetchData;
