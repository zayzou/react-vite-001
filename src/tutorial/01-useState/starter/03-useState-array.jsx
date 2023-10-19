import { useState } from "react";
import { data } from "../../../data";

const useStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    setPeople(people.filter((person) => person.id != id));
    console.log(id);
  };

  return (
    <div>
      {people.map((person) => (
        <div key={person.id} >
          <h3>{person.name}</h3>
          <button
            type="button"
            className="btn"
            style={{backgroundColor:"#c60e7a",cursor:"pointer"}}
            onClick={() => removeItem(person.id)}
          >
            X
          </button>
        </div>
      ))}
      <button type="button" className="btn" onClick={() => setPeople([])}>
        Clear all
      </button>
      <br />
      <button type="button" className="btn" onClick={() => setPeople(data)}>
        Reset
      </button>
    </div>
  );
};

export default useStateArray;
