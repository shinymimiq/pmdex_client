import React from "react";

import "./PokemonInfoView.css";

const PokemonInfoView = ({ pm }) => {
  return (
    <div className="pokemon-info-container">
      <PokemonInfoBasic />
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
            {pm.types.map((type) => {
              return type.type.name + "/";
            })}
          </td>
        </tr>
        <tr>
          <td>Abilities:</td>
          {/* TODO: better to handle abilities by a component  */}
          <td>
            {pm.abilities.map((ab) => {
              return ab.ability.name + "/";
            })}
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

export const PokemonBaseStats = ({ pm }) => {
  // extract stats locally
  const stats = {};
  let sum = 0;
  pm.stats.map((stat) => {
    stats[stat.stat.name] = stat.base_stat;
    sum += stat.base_stat;
    return stats;
  });

  return (
    <div className="pokemon-base-stats">
      <table>
        <tr>
          <td>HP:</td>
          <td>{stats.hp}</td>
          <td className='pm-stat-bar'>
            <div
              className="HP_pm"
              style={{ width: `${(stats["hp"] * 100) / 150}%` }}
            ></div>
          </td>
        </tr>
        <tr>
          <td>ATK:</td>
          <td>{stats.attack}</td>
          <td className='pm-stat-bar'>
            <div
              className="ATK_pm"
              style={{ width: `${(stats["attack"] * 100) / 150}%` }}
            ></div>
          </td>
        </tr>
        <tr>
          <td>DEF:</td>
          <td>{stats.defense}</td>
          <td className='pm-stat-bar'>
            <div
              className="DEF_pm"
              style={{ width: `${(stats["defense"] * 100) / 150}%` }}
            ></div>
          </td>
        </tr>
        <tr>
          <td>SpA:</td>
          <td>{stats["special-attack"]}</td>
          <td className='pm-stat-bar'>
            <div
              className="SPA_pm"
              style={{ width: `${(stats["special-attack"] * 100) / 150}%` }}
            ></div>
          </td>
        </tr>
        <tr>
          <td>SpD:</td>
          <td>{stats["special-defense"]}</td>
          <td className='pm-stat-bar'>
            <div
              className="SPD_pm"
              style={{ width: `${(stats["special-defense"] * 100) / 150}%` }}
            ></div>
          </td>
        </tr>
        <tr>
          <td>SPE:</td>
          <td>{stats.speed}</td>
          <td className='pm-stat-bar'>
            <div
              className="SPE_pm"
              style={{ width: `${(stats["speed"] * 100) / 150}%` }}
            ></div>
          </td>
        </tr>
        <tr>
          <td>TOTAL:</td>
          <td>{sum}</td>
        </tr>
      </table>
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
