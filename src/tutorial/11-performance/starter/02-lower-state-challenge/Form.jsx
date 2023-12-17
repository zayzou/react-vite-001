import React from "react";
import { useState } from "react";
import Label from "./Label";
function Input({addPerson}) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Please Provide Name Value");
      return;
    }
    addPerson(name);
    setName("");
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <Label name="name" />
          <input
            type="text"
            name="name"
            id="name"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button className="btn btn-block" type="submit">
          submit
        </button>
      </form>
    </>
  );
}

export default Input;
