import "./App.css";

import { useState, useEffect } from "react";
import Pokeball from "./Components/Pokeball";
import PokemonList from "./Components/PokemonList";

const Pokedex = require("pokeapi-js-wrapper");
const P = new Pokedex.Pokedex();

const App = () => {
  // const [pmName, setPmName] = useState(null);
  // const [pmID, setPmID] = useState(null);
  // const [pmSpritesURL, setPmSpritesURL] = useState(null);
  const [pm, setPM] = useState([]);

  // TODO: use pokeapi-js-wrapper to cache pmdex locally
  // https://github.com/PokeAPI/pokeapi-js-wrapper

  useEffect(() => {
    // // Hardcoded for now
    // fetch("https://pokeapi.co/api/v2/pokemon/778")
    // .then(results => results.json())
    //   .then(data => {
    //     setPmID(data.id);
    //     setPmName(data.species.name);
    //     setPmSpritesURL(data.sprites.front_default);
    //   });

    // P.getPokemonByName("mimikyu-disguised")
    // .then(response => {
    //   setPmID(response.id);
    //   setPmName(response.species.name);
    //   setPmSpritesURL(response.sprites.front_default);
    //   console.log(response)
    // });

    const interval = {
      offset: 24,
      limit: 10,
    };

    async function fetchPokemon() {
      let response = await P.getPokemonsList(interval);
      // response = await response.json();
      setPM(response.results);
      // console.log(response.results)
      // setPmID(response.id);
      // setPmName(response.species.name);
      // setPmSpritesURL(response.sprites.front_default);
    }
    fetchPokemon();
  }, []); // <-- Have to pass in [] here!

  return (
    <div className="App">
      <Pokeball />
      <h3> Pokemon lists from #26 - #45</h3>
      {/* <PokemonItem pm_name={pmName} pm_sprite_url={pmSpritesURL} pm_id={pmID}></PokemonItem> */}
      <PokemonList results={pm} P={P}></PokemonList>
    </div>
  );
};

export default App;
