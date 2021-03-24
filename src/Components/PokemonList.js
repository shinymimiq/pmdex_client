const PokemonList = (props) => {
  const results = props.results;
  const pmList = results.map((pm) => 
    <li>{pm.name}</li>
  );
  return (
    <div>
      <ul>
        {pmList}
      </ul>
    </div>
  )
}

export default PokemonList
