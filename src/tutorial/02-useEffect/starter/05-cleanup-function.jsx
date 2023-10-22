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
    const func = () => {};
    window.addEventListener("scroll", func);
    return () => window.removeEventListener("scroll", func);
  }, []);

  return <h4>Second Component !</h4>;
};

export default CleanupFunction;
