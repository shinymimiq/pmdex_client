import Pokemon from "./Pokemon";

const PokemonList = (props) => {
  const results = props.results;
  const P = props.P;
  const pmList = results.map((pm) => (
    <li key={pm.name}>
      <Pokemon pmName={pm.name} P={P} />
    </li>
  ));
  return (
    <div>
      <ul>{pmList}</ul>
    </div>
  );
};

export default PokemonList;
