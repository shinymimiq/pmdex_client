// import "./App.css";

import PokemonOverview from "./Components/PokemonOverview/PokemonOverview";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./Components/Header";

import NotFoundPage from "./Pages/404Page";
import PokemonAvatar from "./Components/PokemonView/PokemonAvatar";
import { PokemonPage } from "./Pages/PokemonPage";

import { ScrollToTopOnMount } from "./utils/ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTopOnMount />
      <div className="flex flex-col h-full">
        <Header></Header>
        <div className="h-full overflow-y-auto w-full mx-auto">
          <Switch>
            <Route exact path="/(|pokemon)">
              <PokemonOverview />
            </Route>
            <Route path="/pokemon/:pmID">
              <PokemonPage />
            </Route>
            <Route path="/avatar" component={PokemonAvatar} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
