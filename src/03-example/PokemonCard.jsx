import { useRef, useLayoutEffect, useState } from "react";

export const PokemonCard = ({ id, name, sprites = [] }) => {
  const nameRef = useRef();
  const [boxSize, setboxSize] = useState({ width: 0, height: 0 });
  useLayoutEffect(() => {
    const { width, height } = nameRef.current.getBoundingClientRect();
    setboxSize({ width, height });
    console.log(boxSize);
  }, [name]);
  return (
    <section style={{ height: 200 }}>
      <h2 ref={nameRef} className="text-capitalize">
        Name: {name}
      </h2>
      <h3 className="text-capitalize">Id: {id}</h3>
      {sprites.map((sprite) => {
        return <img key={sprite} src={sprite} alt={name}></img>;
      })}
    </section>
  );
};
