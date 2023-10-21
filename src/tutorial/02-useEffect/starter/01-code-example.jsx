import { useState } from 'react';

const CodeExample = () => {
  const [value, setValue] = useState(0);

  const sayHello = ()=>{
    // setValue(value+1) infinite loop
    console.log("hello");
  }


  sayHello() // execute for each render 

  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default CodeExample;
