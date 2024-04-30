import { useState, useCallback } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setcounter] = useState(10);
  const incrementFather = useCallback(() => {
    setcounter((value) => value + 1);
  }, []);

/*   const increment = () => {
    setcounter(counter + 1);
  }; */
  return (
    <>
      <h1>useCallbackHook: {counter}</h1>
      <hr />
      <ShowIncrement increment={incrementFather} />
    </>
  );
};
