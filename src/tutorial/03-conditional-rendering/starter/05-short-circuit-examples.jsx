import { useState } from "react";

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState("Hi");
  // truthy
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "john" });
  const [isEditing, setIsEditing] = useState(true);

  return (
    <div>
      <h2>short circuit - examples</h2>
      <h5>{!text || "default value"}</h5>
      {text && <h4>{name}</h4>}
      {name && <Component name={user.name} />}
      <h4>Ternary Operators</h4>
      <button className="btn">{isEditing ? "edit" : "add"}</button>
    </div>
  );
};

const Component = ({ name }) => {
  return (
    <div>
      <h4>This user is : {name}</h4>
    </div>
  );
};
export default ShortCircuitExamples;
