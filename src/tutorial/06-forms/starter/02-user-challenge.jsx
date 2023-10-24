import { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);

  const process = (e) => {
    e.preventDefault();
    if (!name) {
      console.error("No name");
      return
    }
    setUsers([...users, { id: users.length + 1,  name }]);
    setName("");
  };

  return (
    <div>
      <form className="form" onSubmit={process}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {users.map(({ id, name }) => {
        return (
          <h5 key={id}>
            {name}{" "}
            <button
              type="button"
              className="btn alert-danger"
              onClick={() => setUsers(users.filter((user) => user.id !== id))}
            >
              X
            </button>
          </h5>
        );
      })}
    </div>
  );
};
export default UserChallenge;
