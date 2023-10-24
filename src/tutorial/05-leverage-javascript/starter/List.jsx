import Person from "./Person";
import { people } from "../../../data";

function List() {
  return (
    <>
      <h4>Leverage Javascript ⚛️</h4>
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </>
  );
}

export default List;
