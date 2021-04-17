import "./App.css";

import { useState, useEffect } from "react";
import Pokeball from "./Components/Pokeball";
import PokemonList from "./Components/PokemonList";
import apiGen from "./Api/apiGen";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Nav } from "./Components/Nav";

const nationalPMDexCount = 898;

function promiseGenfetchPokemon(offset = 1, limit = nationalPMDexCount) {
  const pmPromises = [];
  Array.from({length: nationalPMDexCount}, (_, i) => i + offset).map((i) => 
    pmPromises.push(apiGen.getPokemonByName(i))
  )
  return Promise.all(pmPromises);
}

const App = () => {
  const [pms, setPMs] = useState([]);
  const [searchField, setSearchField] = useState("");
  const getFilteredPMs = (pm_list) => {
    return pm_list.filter((pm) =>
      pm.species.name.toLowerCase().includes(searchField.toLowerCase())
    );
  };

  useEffect(() => {
    async function run() {
      let response = [];
      try {
        response = await promiseGenfetchPokemon();
      } catch (e) {
        console.error(e);
      }
      setPMs(response);
    }
    run();
  }, []); // <-- Have to pass in [] here!

  return (
    <div>
      <Nav></Nav>
      <input
        type="search"
        placeholder="Search Pokemon"
        className="search-bar"
        onChange={(e) => setSearchField(e.target.value)}
      />
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/pokemon">Pokemon List</Link>
              </li>
            </ul>
          </nav>
          <Pokeball />
          <Route path="/(|pokemon)">
            <PokemonList pms_detail={getFilteredPMs(pms)}></PokemonList>
          </Route>
        </div>
      </Router>
    </div>
  );
};

export default App;
