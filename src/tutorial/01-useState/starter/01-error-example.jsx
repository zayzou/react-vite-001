const ErrorExample = () => {
  let count = 0;

  const increase = () => {
    console.log("Button clicked : "+count);
    count++;
    //this is not how it should be done :)
    document.getElementById("text").innerHTML = count;
  };

  return (
    <>
      <h2>useState error example</h2>
      <p id="text">{count}</p>
      <button onClick={increase} className="btn">Click to increment</button>
    </>
  );
};

export default ErrorExample;
