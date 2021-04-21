import React from "react";
import { TYPE_COLOR } from "../../Assets/PokemonTypeColour";

import "./PokemonAvatar.css";

const PokemonAvatar = ({ pm }) => {
  // const pm = {
  // types: [
  // {type: 'ghost'},
  // {type: 'fairy'}
  // ]
  // }
  const pmTypes = [];
  pm.types.map((type) => pmTypes.push(type.type.name));

  return (
    <div className="pm-avatar">
      <PokemonAvatarBackground types={pmTypes} />
      <div className="pm-sprite-container">
          <img
            className="pm-sprite"
            src={pm.sprites.front_default}
            alt={pm.species.name}
          />
          <p className="pm-id-name">
            #{pm.id} {pm.species.name.toUpperCase()}
          </p>
        </div>
    </div>
  );
};

const PokemonAvatarBackground = ({ types }) => {
  return (
    <div className="pm-avatar-background">
      <div
        className="pm-avatar-left"
        style={{ backgroundColor: `${TYPE_COLOR[types[0]]}` }}
      />
      <div
        className="pm-avatar-right"
        style={{
          backgroundColor:
            types.length === 2
              ? `${TYPE_COLOR[types[1]]}`
              : `${TYPE_COLOR[types[0]]}`,
        }}
      />
    </div>
  );
};

export default PokemonAvatar;
