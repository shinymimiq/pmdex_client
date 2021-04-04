import "./App.css";

import { useState, useEffect } from "react";
import Pokeball from "./Components/Pokeball";
import PokemonList from "./Components/PokemonList";
import apiGen from "./Api/apiGen";
// import Axios from "axios"
// const Axios = require("axios");

const Pokedex = require("pokeapi-js-wrapper");
const P = new Pokedex.Pokedex();
const nationalPMDexCount = 151;

function promiseGenfetchPokemon(offset=1, limit=nationalPMDexCount) {
  // let indexArr = [...Array(nationalPMDexCount).keys()].map((i) => i + 1);
  // [Array(nationalPMDexCount).keys()].map((i)=> {
  var i = 0;
  const pmPromises = [];
  for (i=offset;i<=limit;i++){
    pmPromises.push(apiGen.getPokemonByName(i));
  }
  return Promise.all(pmPromises);
}

const App = () => {
  const [pms, setPMs] = useState([]);

  useEffect(() => {
    
    async function run() {
      let response = []
      try {
        response = await promiseGenfetchPokemon();
      } catch(e) {
        console.error(e);
      }
      console.log("RUN");
      console.log(response);
      setPMs(response);
    }
    // fetchPokemon(1, 20);
    run();
  }, []); // <-- Have to pass in [] here!

  return (
    <div className="App">
      <Pokeball />
      <h3> Pokemon lists from #1 - #151</h3>
      {/* <PokemonItem pm_name={pmName} pm_sprite_url={pmSpritesURL} pm_id={pmID}></PokemonItem> */}
      {pms.length === 0 && <p>Loading</p>}
      {pms.length > 0 && <PokemonList pms={pms}></PokemonList>}
    </div>
  );
};

export default App;
