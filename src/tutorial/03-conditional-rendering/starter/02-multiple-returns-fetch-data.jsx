import { useEffect, useState } from "react";

const url = "https://api.githb.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h2>Loading ...</h2>;
  }
  if (isError) {
    return <h2>An error occurred 🥺.</h2>;
  }

  return (
    <div className="container">
      <h4>Fetch Data</h4>
      <section className="">
        <img
          src={user.avatar_url}
          alt={user.name}
          className="img"
          style={{ width: "140px", height: "140px", margin: "auto" }}
        />
        <h3>{user.name}</h3>
        <h4>Works at {user.company}</h4>
        <h5>
          Find more on <a href={user.blog}>{user.blog}</a>
        </h5>
        <p>{user.bio}</p>
      </section>
    </div>
  );
};

export default MultipleReturnsFetchData;
