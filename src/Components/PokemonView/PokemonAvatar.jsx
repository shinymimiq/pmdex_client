import React from "react";
import { TYPE_COLOR } from "../../Assets/PokemonTypes/PokemonTypeColour";

const PokemonAvatar = ({ pm }) => {
  const pmTypes = [];
  pm.types.map((type) => pmTypes.push(type.type.name));

  return (
    <div className="pm-avatar w-full h-1/6">
      <PokemonAvatarBackground types={pmTypes} />
      <div className="pm-sprite-container relative flex-col z-10">
        <img
          className="pm-sprite"
          src={pm.sprites.front_default}
          // TODO: use some service worker to cache these high-def image
          // before we enable it.
          // src={pm.sprites.other['official-artwork'].front_default}
          alt={pm.species.name}
        />
        <span className="pm-id-name uppercase">
          #{pm.id} {pm.species.name}
        </span>
      </div>
    </div>
  );
};

const PokemonAvatarBackground = ({ types }) => {
  return (
    <div className="pm-avatar-background h-40 w-40 absolute flex z-0">
      <div
        className="pm-avatar-left w-1/2 rounded-tl-full"
        style={{ backgroundColor: `${TYPE_COLOR[types[0]]}` }}
      />
      <div
        className="pm-avatar-right w-1/2 rounded-br-full"
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
