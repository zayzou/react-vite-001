import { data } from "../../../data";
import { useState } from "react";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removeElement = (element) => {
    const id = element.target.id;
    console.log("you are going to delete " + id);
    const filtered = data.filter((person) => person.id != id);
    setPeople(filtered);
  };

  const clearAll = () => {
    setPeople([]);
  };

  return (
    <div>
      {people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
            <button id={person.id} type="button" onClick={removeElement}>
              delete
            </button>
          </div>
        );
      })}
      <button className="btn" type="button" onClick={clearAll}>
        Clear all
      </button>
    </div>
  );
};

export default UseStateArray;
