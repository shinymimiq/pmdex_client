// import "./App.css";

import PokemonOverview from "./Components/PokemonOverview/PokemonOverview";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./Components/Header";

import NotFoundPage from "./Pages/404Page";
import { PokemonPage } from "./Pages/PokemonPage";
import { MovesPage } from "./Pages/MovesPage";
import { ItemsPage } from "./Pages/ItemsPage";

import { ScrollToTopOnMount } from "./utils/ScrollToTop";
import WithFooter from "./Components/WithFooter.component.jsx";

const App = () => {
  return (
    <Router>
      <ScrollToTopOnMount />
      <div className="flex-1 flex-col h-full pt-20">
        <Header></Header>
        <div className="app-content h-full w-full mx-auto mt-0 overflow-y-auto flex-1">
          <Switch>
            <Route exact path="/(|pokemon)">
              {WithFooter(PokemonOverview)}
            </Route>
            <Route path="/pokemon/:pmID">{WithFooter(PokemonPage)}</Route>
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
