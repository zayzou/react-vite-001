import { useState, useTransition, Suspense, lazy } from "react";
const SlowComponent = lazy(() => import("./SlowComponent"));
// import SlowComponent from "./SlowComponent";
const LatestReact = () => {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  const [isPending, startTransition] = useTransition();
  const [toggle, setToggle] = useState(false);
  const handleChange = (e) => {
    setText(e.target.value);

    // slow down CPU
    startTransition(() => {
      const newItems = Array.from({ length: 5000 }, (_, index) => {
        return (
          <div key={index}>
            <img src="/vite.svg" alt="" />
          </div>
        );
      });
      setItems(newItems);
    });
  };
  return (
    <Suspense fallback={<h3>Loading ....</h3>}>
      <section>
        <form className="form">
          <input
            type="text"
            className="form-input"
            value={text}
            onChange={handleChange}
          />
        </form>
        <h4>Items Below</h4>
        {isPending ? (
          <h3>Loading ....</h3>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              marginTop: "2rem",
            }}
          >
            {items}
          </div>
        )}
        <button className="btn" onClick={() => setToggle(!toggle)}>
          Toggle
        </button>
        {toggle && <SlowComponent />}
      </section>
    </Suspense>
  );
};
export default LatestReact;
