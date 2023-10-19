import { useState } from "react";
const UseStateObject = () => {

  const [person,setPerson] = useState({name:"Zahir",age:30,hobby:"Bodybuilding 💪"})


  const showPerson = ()=>{
    setPerson({name:"John",age:21,hobby:"Read books 🤓"})
  }
  return (
    <>
      <h2>Use state object example</h2>
      <h4>{person.name}</h4>
      <h4>{person.age}</h4>
      <h4>{person.hobby}</h4>
      <button className="btn" onClick={showPerson}>Show John 👁️</button>
    </>
  );
};

export default UseStateObject;
