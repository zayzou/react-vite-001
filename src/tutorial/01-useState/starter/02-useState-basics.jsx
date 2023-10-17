import { useState } from "react";

const UseStateBasics = () => {

  // useState(1) is an array of value,function
  // console.log(...useState(1));
  // const value = useState("bob")[0] //the actual value
  // const func = useState("bob")[1] //the function that will update the state.
  // console.log(value);
  // console.log(func);

  const [count,setCount] = useState(0);

  const handleClick= ()=>{
    setCount(count+1)
  }
  return <div>
    <h2>you clicked {count}</h2>
    <button className="btn" onClick={handleClick}>Increment</button>
  </div>;
};

export default UseStateBasics;
