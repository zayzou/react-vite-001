const ControlledInputs = () => {
  return (
    <form action="" className="form">
      <h4>Controlled inputs</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name{" "}
        </label>
        <input type="text" id="name" className="form-input" />
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input type="email" name="" id="email" className="form-input" />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </div>
    </form>
  );
};
export default ControlledInputs;
