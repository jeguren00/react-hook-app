import { useMemo, useState } from "react";
import { useCounter } from "../hooks";
import { Small } from "./Small";

const heavyStuff = (itrerationsNumber = 100) => {
  for (let i = 0; i < itrerationsNumber; i++) {
    console.log("iteration");
  }
  return `${itrerationsNumber} iteraciones realizadas`;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(1000);
  const [show, setshow] = useState(true);
  const memorizedvalue = useMemo(()=> heavyStuff(counter),[counter]);
  return (
    <>
      <h1>
        Counter:
        <Small value={counter} />
      </h1>
      <hr />
      <h4>{memorizedvalue}</h4>
      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>
      <button className="btn btn-primary" onClick={() => setshow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
