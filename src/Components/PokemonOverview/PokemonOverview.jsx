import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "../../Assets/iconfont.css";
import "./PokemonOverview.css";

// Generate the Pokemon List view

const PokemonOverview = ({ pms }) => {
  return (
    <div className="pokemon_list">
      {pms.map((pm) => (
        <PokemonThumbnail key={`pm${pm.id}`} pm={pm} />
      ))}
    </div>
  );
};

const PokemonThumbnail = ({ pm }) => {
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

const mapStateToProps = ({ pmOverview }) => ({
  pms: pmOverview.data,
});

export default connect(mapStateToProps)(PokemonOverview);
