import React from "react";
import { PokemonTypes } from "./types/PokemonTypes";
import { PokemonAbilities } from "./abilities/PokemonAbilities";
import { PokemonBaseStats } from "./PokemonStats";

// import "./PokemonInfoView.css";

const PokemonInfoView = ({ pm }) => {
  return (
    <div className="pokemon-info-container">
      <PokemonInfoBasic pm={pm} />
      <PokemonBaseStats />
    </div>
  );
};

export const PokemonInfoBasic = ({ pm }) => {
  return (
    <div className="pokemon-info-basic m-5 border">
      <div>
        <span>Weight:</span>
        <span>{cWH(pm.weight)}kg</span>
      </div>
      <div>
        <span>Height:</span>
        <span>{cWH(pm.height)}m</span>
      </div>
      <div>
        <span>Type:</span>
        <PokemonTypes pm={pm} />
      </div>
      <span>Abilities:</span>
      <PokemonAbilities ab={pm.abilities} />
      <div className="breeding-info">
        <span>Egg Group: Amorphous</span>
        <br />
        <span>Hatch time: 5140-5396 steps</span>
      </div>
    </div>
  );
};

//Utils func:
const cWH = (data) => {
  return data / 10.0;
};

export default PokemonInfoView;
