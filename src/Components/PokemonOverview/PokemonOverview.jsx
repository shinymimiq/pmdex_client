import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "../../Assets/iconfont.css";
// import "./PokemonOverview.css";

// Generate the Pokemon List view

const PokemonOverview = ({ pms }) => {
  return (
    <div className="pokemon-overview flex flex-wrap justify-center">
      {pms.map((pm) => (
        <PokemonOverviewItem key={`${pm.id}`} pm={pm} />
      ))}
    </div>
  );
};

const PokemonOverviewItem = ({ pm }) => {
  return (
    <div
      className="pokemon-overview-item 
      w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 
      flex-col h-full hover:bg-gray-200"
    >
      <Link
        className="pokemon-thumbnail h-full w-full overflow-visible"
        to={`/pokemon/${pm.id}`}
      >
        <div className="img-container h-4/5">
          <img src={pm.imageUrl} alt="pokemon" className="mx-auto" />
        </div>
        <div className="name-container flex justify-center">
          <span className="mr-2">
            <em className="iconfont">&#xe625;</em>
            {pm.id}
          </span>
          <span className="uppercase">{pm.name}</span>
        </div>
      </Link>
    </div>
  );
};

const mapStateToProps = ({ pmOverview }) => ({
  pms: pmOverview.data,
});

export default connect(mapStateToProps)(PokemonOverview);
