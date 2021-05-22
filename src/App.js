// import "./App.css";

import PokemonOverview from "./Components/PokemonOverview/PokemonOverview";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./Components/Header";

import NotFoundPage from "./Pages/404Page";
import { PokemonPage } from "./Pages/PokemonPage";
import { MovesPage } from "./Pages/MovesPage";
import { ItemsPage } from "./Pages/ItemsPage";

import { ScrollToTopOnMount } from "./utils/ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTopOnMount />
      <div className="flex-1 flex-col h-full">
        <Header></Header>
        <div className="h-full overflow-y-auto w-full mx-auto">
          <Switch>
            <Route exact path="/(|pokemon)">
              <PokemonOverview />
            </Route>
            <Route path="/pokemon/:pmID">
              <PokemonPage />
            </Route>
            <Route path="/moves">
              <MovesPage />
            </Route>
            <Route path="/items">
              <ItemsPage />
            </Route>
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
