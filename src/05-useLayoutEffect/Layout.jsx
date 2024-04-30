import { useCounter, useFetch } from "../hooks";
import { LoadingMessage } from "../03-example/LoadingMessage";
import { PokemonCard } from "../03-example/PokemonCard";

export const Layout = () => {
  const { counter, decrement, increment } = useCounter(2);
  const { data, isLoading, hasError } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );
  return (
    <>
      <h1>Información de Pokémon</h1>
      <hr></hr>
      {isLoading ? <LoadingMessage /> : <PokemonCard id={data?.id} name={data?.name} sprites={[data?.sprites.front_default, data?.sprites.front_shiny,data?.sprites.back_default,data?.sprites.back_shiny]} />}

      {/* <h2>{data?.name}</h2> */}
      <button
        className="btn btn-primary mt-2"
        onClick={() => counter > 1 && decrement()}
      >
        Antrior
      </button>
      <button className="btn btn-primary mt-2" onClick={() => increment()}>
        Siguiente
      </button>
    </>
  );
};
