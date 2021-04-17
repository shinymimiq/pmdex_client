import { Route, Link } from "react-router-dom";

import './PokemonList.css'

// Generate the Pokemon List view

const PokemonList = ({ pms_detail }) => {
  return (
    <div className="pokemon_list">
      {
        pms_detail.map((pm) => (
          <PokemonPreview key={`pm${pm.id}`} pm={pm}/>
        ))
      }
    </div>
  );
};

const PokemonPreview = ({ pm }) => {
  return (
    <Link className='pokemon_preview' to={`/pokemon/${pm.id}`} >
      <img src={pm.sprites.front_default} alt={pm.species.name}></img>
      <p>
        <em className="iconfont">&#xe625;</em>
        {pm.id}
      </p>
      <p className='capitalize'>{pm.species.name}</p>
    </Link>
  )
}

export default PokemonList;
