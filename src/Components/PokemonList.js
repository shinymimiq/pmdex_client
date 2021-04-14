import { PokemonView } from "./PokemonView";
import { Route, Link } from "react-router-dom";

const PokemonList = ({ pms_detail }) => {
  const pmList = pms_detail.map((pm) => (
    <div className="pm_info" id={`pm${pm.id}`} key={`pm${pm.id}`}>
      <Link to={`/pokemon/${pm.id}`}>
        <img src={pm.sprites.front_default} alt={pm.species.name}></img>
        <p>
          <em class="iconfont">&#xe625;</em>
          {pm.id}
        </p>
        {pm.name}
      </Link>
    </div>
  ));

  return (
    <div className="pokemon_list">
      <Route path="/pokemon/:pm_id" >
        <PokemonView pms_detail={pms_detail}></PokemonView>
      </Route>
      {pmList}
    </div>
  );
};

export default PokemonList;
