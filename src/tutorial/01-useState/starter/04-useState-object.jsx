import { useState } from "react";

const UseStateObject = () => {
  const [name, setName] = useState("zahir");
  const [age, setAge] = useState(30);
  const [hobby, setHobby] = useState("bodybuilding 💪");


  const showPerson = ()=>{
    setName("john")
    setAge(34)
    setHobby("listen to music 🎧")
  }
  return (
    <>
      <h2>Use state object example</h2>
      <h4>{name}</h4>
      <h4>{age}</h4>
      <h4>{hobby}</h4>
      <button className="btn" onClick={showPerson}>Show John 👁️</button>
    </>
  );
};

export default UseStateObject;
