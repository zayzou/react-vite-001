import { useState,useEffect } from 'react';

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  const sayHello = () => {
    console.log('hello there');
  };

  //use useEffect with dependency array to prevent > 1 rendering
  useEffect(()=>{
    console.log("hello from use effect");
  },[])

  sayHello();

  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default UseEffectBasics;
