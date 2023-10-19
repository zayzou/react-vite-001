import { useState } from "react";
const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue((currentState)=>{
      let newState = currentState+1
      console.log(newState);
      return newState
    });
  };
  return (
    <>
      <h2>useState "gotcha"</h2>
      <h5>{value}</h5>
      <button className="btn" onClick={increment}>
        increment
      </button>
    </>
  );
};

export default UseStateGotcha;
