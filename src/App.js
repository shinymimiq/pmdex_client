import "./App.css";

import { useState, useEffect } from "react";
import PokemonList from "./Components/PokemonList";
import { PokemonView } from "./Components/PokemonView";
import apiGen from "./Api/apiGen";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./Components/Header";

import "./Components/Search.css";

const nationalPMDexCount = 898;

function promiseGenfetchPokemon(offset = 1, limit = nationalPMDexCount) {
  const pmPromises = [];
  Array.from({ length: nationalPMDexCount }, (_, i) => i + offset).map((i) =>
    pmPromises.push(apiGen.getPokemonByName(i))
  );
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

  const handleOnChange = (e) => {
    setSearchField(e.target.value);
  }

  return (
      <Router>
      <Header searchHandleOnChange={handleOnChange}></Header>
        <div className="App">
          <Switch>
            <Route exact path="/(|pokemon)">
              <PokemonList pms_detail={getFilteredPMs(pms)}></PokemonList>
            </Route>
            <Route path="/pokemon/:pm_id">
              <PokemonView pms_detail={pms}></PokemonView>
            </Route>
          </Switch>
        </div>
      </Router>
  );
};

export default App;
