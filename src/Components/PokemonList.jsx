import { Link } from "react-router-dom";

import "../Assets/iconfont.css";
import "./PokemonList.css";

// Generate the Pokemon List view

const PokemonList = ({ pms }) => {
  return (
    <div className="pokemon_list">
      {pms.map((pm) => (
        <PokemonPreview key={`pm${pm.id}`} pm={pm} />
      ))}
    </div>
  );
};

const PokemonPreview = ({ pm }) => {
  return (
    <Link className="pokemon_preview" to={`/pokemon/${pm.id}`}>
      <img src={pm.imageUrl} alt="pokemon"></img>
      <p>
        <em className="iconfont">&#xe625;</em>
        {pm.id}
      </p>
      <p className="capitalize">{pm.name}</p>
    </Link>
  );
};

export default PokemonList;
