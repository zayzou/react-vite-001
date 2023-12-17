import React from "react";

function Label({ name }) {
  return (
    <label htmlFor={name} className="form-label">
      {name}
    </label>
  );
}

export default Label;
