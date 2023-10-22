import { useEffect } from "react";
import { useState } from "react";

const CleanupFunction = () => {
  console.log("Render ");
  const [isLogged, setIsLogged] = useState(false);
  return (
    <div>
      <button className="btn" onClick={() => setIsLogged(!isLogged)}>
        Toggle
      </button>
      {isLogged && <SecondComponent />}
    </div>
  );
};

const SecondComponent = () => {
  useEffect(() => {
    console.log("hmm, this is interesting");
    const intId = setInterval(() => {
      console.log("Call from setInterval");
    }, 1000);
    return () => {
      console.log("Cleanup");
      clearInterval(intId);
    };
  }, []);

  return <h4>Second Component !</h4>;
};

export default CleanupFunction;
