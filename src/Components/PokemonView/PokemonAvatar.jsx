import React from "react";
import { TYPE_COLOR } from "../../Assets/PokemonTypes/PokemonTypeColour";

const PokemonAvatar = ({ pm }) => {
  const pmTypes = [];
  pm.types.map((type) => pmTypes.push(type.type.name));

  return (
    <div className="pm-avatar h-40 w-40 relative mx-10 mt-5 flex">
      <div className="pm-sprite-container h-full w-full flex-col z-10 absolute">
        <div className="flex-grow w-full">
          <img
            className="pm-sprite mx-auto object-fill"
            src={pm.sprites.front_default}
            // TODO: use some service worker to cache these high-def image
            // before we enable it.
            // src={pm.sprites.other['official-artwork'].front_default}
            alt={pm.species.name}
          />
        </div>
        <div className="pm-id-name uppercase self-center text-center">
          #{pm.id} {pm.species.name}
        </div>
      </div>
      <PokemonAvatarBackground types={pmTypes} />
    </div>
  );
};

const PokemonAvatarBackground = ({ types }) => {
  return (
    <div className="pm-avatar-background absolute top-0 left-0 h-40 w-40 flex z-0">
      <div
        className="pm-avatar-left w-1/2 rounded-l-xl"
        style={{ backgroundColor: `${TYPE_COLOR[types[0]]}A0` }}
      />
      <div
        className="pm-avatar-right w-1/2 rounded-r-xl"
        style={{
          backgroundColor:
            types.length === 2
              ? `${TYPE_COLOR[types[1]]}A0`
              : `${TYPE_COLOR[types[0]]}A0`,
        }}
      />
    </div>
  );
};

export default PokemonAvatar;
