const Person = ({ name,id, removePerson }) => {
  return (
    <div>
      <h4>
        {name} <button onClick={() => removePerson(id)}>remove</button>
      </h4>
    </div>
  );
};
export default Person;
