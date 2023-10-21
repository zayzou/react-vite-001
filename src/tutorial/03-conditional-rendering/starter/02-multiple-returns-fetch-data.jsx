import { useEffect, useState } from "react";

const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append(
      "Cookie",
      "_octo=GH1.1.2094383103.1678821344; logged_in=no"
    );

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch(url, requestOptions)
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

  const { avatar_url, name, company, blog, bio } = user;
  return (
    <div className="container">
      <h4>Fetch Data</h4>
      <section className="">
        <img
          src={avatar_url}
          alt={name}
          className="img"
          style={{ width: "140px", height: "140px", margin: "auto" }}
        />
        <h3>{name}</h3>
        <h4>Works at {company}</h4>
        <h5>
          Find more on <a href={blog}>{blog}</a>
        </h5>
        <p>{bio}</p>
      </section>
    </div>
  );
};

export default MultipleReturnsFetchData;
