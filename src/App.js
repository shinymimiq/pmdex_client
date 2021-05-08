import "./App.css";

import { useState, useEffect } from "react";
import PokemonList from "./Components/PokemonList";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./Components/Header";

import "./Components/Search.css";
import NotFoundPage from "./Pages/404Page";
import PokemonAvatar from "./Components/PokemonView/PokemonAvatar";
import { PokemonPage } from "./Pages/PokemonPage";

import { ScrollToTopOnMount } from "./utils/ScrollToTop";
import { PM_OVERVIEW } from "./utils/pokemon_overview";

const App = () => {
  const [pms, setPMs] = useState([]);
  const [searchField, setSearchField] = useState("");
  const getFilteredPMs = (pm_list) => {
    return pm_list.filter((pm) =>
      pm.name.toLowerCase().includes(searchField.toLowerCase())
    );
  };

  useEffect(() => {
    setPMs(PM_OVERVIEW);
  }, []); // <-- Have to pass in [] here!

  const handleOnChange = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <Router>
      <ScrollToTopOnMount />
      <Header searchHandleOnChange={handleOnChange}></Header>
      <div className="App">
        <Switch>
          <Route exact path="/(|pokemon)">
            <PokemonList pms={getFilteredPMs(pms)} />
          </Route>
          <Route path="/pokemon/:pmID">
            <PokemonPage />
          </Route>
          <Route path="/avatar" component={PokemonAvatar} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
