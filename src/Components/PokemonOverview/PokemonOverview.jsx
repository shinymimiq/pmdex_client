import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "../../Assets/iconfont.css";
import "./PokemonOverview.css";

// Generate the Pokemon List view

const PokemonOverview = ({ pms }) => {
  return (
    <div className="pokemon-overview">
      {pms.map((pm) => (
        <Link
          key={`${pm.id}`}
          className="pokemon-thumbnail"
          to={`/pokemon/${pm.id}`}
        >
          <img src={pm.imageUrl} alt="pokemon"></img>
          <p>
            <em className="iconfont">&#xe625;</em>
            {pm.id}
          </p>
          <p className="capitalize">{pm.name}</p>
        </Link>
      ))}
    </div>
  );
};

const mapStateToProps = ({ pmOverview }) => ({
  pms: pmOverview.data,
});

export default connect(mapStateToProps)(PokemonOverview);
