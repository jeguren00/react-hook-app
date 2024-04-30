import { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setcoords] = useState({ x: 0, y: 0 });
  useEffect(() => {
    //console.log("Message Mounted");
    const onMouseMove = ({x,y}) => {
        setcoords({x,y});
    };
    window.addEventListener('mousemove',onMouseMove);
    return () => {
        window.removeEventListener('mousemove',onMouseMove);
      //console.log("Message Unmounted");
    };
  }, []);

  return <>
    <h3>Usuario ya existe</h3>
    <p>{JSON.stringify(coords)}</p>
  </>
};
