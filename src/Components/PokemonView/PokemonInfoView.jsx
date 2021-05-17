import React from "react";
import { PokemonTypes } from "./types/PokemonTypes";
import { PokemonAbilities } from "./abilities/PokemonAbilities";
import { PokemonBaseStats } from "./PokemonStats";

import "./PokemonInfoView.css";

const PokemonInfoView = ({ pm }) => {
  return (
    <div className="pokemon-info-container">
      <PokemonInfoBasic pm={pm} />
      <PokemonBaseStats />
      <PokemonTrainBreed />
    </div>
  );
};

export const PokemonInfoBasic = ({ pm }) => {
  return (
    <div className="pokemon-info-basic">
      <table>
        <tr>
          <td>ID:</td>
          <td>{pm.id}</td>
        </tr>
        <tr>
          <td>Weight:</td>
          <td>{cWH(pm.weight)}kg</td>
        </tr>
        <tr>
          <td>Height:</td>
          <td>{cWH(pm.height)}m</td>
        </tr>
        <tr>
          <td>Type:</td>
          {/* TODO: better to handle types by a component  */}
          <td>
            <PokemonTypes pm={pm} />
          </td>
        </tr>
        <tr>
          <td>Abilities:</td>
          {/* TODO: better to handle abilities by a component  */}
          <td>
            <PokemonAbilities ab={pm.abilities} />
          </td>
        </tr>
      </table>
      {/* Dex description is in the pokemon-species end point. */}
      {/* Could be fetched combine with info like breed and train */}
      <p>Dex Description</p>
      <p>JUST TEMPLATES: </p>
      <p>
        It wears a rag fashioned into a Pikachu costume in an effort to look
        less scary. Unfortunately, the costume only makes it creepier.
      </p>
    </div>
  );
};

export const PokemonTrainBreed = ({ pm }) => {
  return (
    <div className="pokemon-train-breed">
      <p>Egg Group: Amorphous</p>
      <p>Hatch time: 5140-5396 steps</p>
    </div>
  );
};

//Utils func:
const cWH = (data) => {
  return data / 10.0;
};

export default PokemonInfoView;
