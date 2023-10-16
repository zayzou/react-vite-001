const ErrorExample = () => {
  let count = 0;

  const increase = () => {
    console.log("Button clicked");
    count++;
  };

  return (
    <>
      <h2>useState error example</h2>
      <p>{count}</p>
      <button onClick={increase}>Click to increment</button>
    </>
  );
};

export default ErrorExample;
