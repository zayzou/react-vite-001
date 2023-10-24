import { useState } from "react";

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  /*   const handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setName(e.target.value)
    setEmail(e.target.value)
  }; */

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email);
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <h4>Controlled inputs</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name{" "}
        </label>
        <input
          type="text"
          id="name"
          name=""
          className="form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="email"
          name=""
          id="email"
          className="form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </div>
    </form>
  );
};
export default ControlledInputs;
