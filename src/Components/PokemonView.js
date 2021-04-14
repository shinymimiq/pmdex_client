import { useState, useEffect } from "react";
import "../Resources/iconfont.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { useParams } from "react-router-dom";

import apiGen from "../Api/apiGen";

import { Link } from "react-router-dom";
import MovesView from "./MovesView";

// Show: Sprites, Name, ID, types, weight, height, abilities.
export const PokemonView = (props) => {
  const { pm_id } = useParams();
  let pm = props.pms_detail.filter(pm => parseInt(pm.id)===parseInt(pm_id));
  if (pm.length === 1) {
    pm = pm[0];
  }

  const [abilities_info, setAbility_info] = useState();

  const abilities = pm.abilities.map((ability) => (
    <p key={ability.ability.name}>{ability.ability.name}</p>
  ));



  // const showAbilitiesDetail = () => {
  //   console.log("HOVER")
  //   return (
  //   <div>
  //     {!abilities_info && "LOADING...."}
  //     {abilities_info && <PokemonAbility ab={abilities_info}/>}
  //   </div>
  //   )
  // }

  useEffect(() => {
    const getAbility = async () => {
      return Promise.all(
        pm.abilities.map((ab) => apiGen.getAbilityByName(ab.ability.name))
      );
    };

    async function run() {
      try {
        let res = await getAbility();
        setAbility_info(res);
      } catch (e) {
        console.error(e);
      }
    }
    run();
  }, [pm.abilities]);

  return (
    <div className="pm_info_full">
      <Link
        to="/pokemon"
        style={{ position: "fixed", top: "7%", left: "3%", zIndex: 11 }}
      >
        <FontAwesomeIcon icon={faTimes} />
      </Link>

      <img src={pm.sprites.front_default} alt={pm.name}></img>
      <table>
        <tr>
          <td>ID:</td>
          <td>{pm.id}</td>
        </tr>
        <tr>
          <td>Name:</td>
          <td>{pm.name}</td>
        </tr>
        <tr>
          <td>Height:</td>
          <td>{pm.height}</td>
        </tr>
        <tr>
          <td>Weight:</td>
          <td>{pm.weight}</td>
        </tr>
        <tr>
          <td>Types:</td>
          <td>
            <TypeView types={pm.types}></TypeView>
          </td>
        </tr>
        <tr>
          <td>Abilities:</td>
          <td className="Abilities">{abilities}</td>
          <td className="Abilities_full">
            {!abilities_info && "LOADING...."}
            {abilities_info && <PokemonAbility ab={abilities_info} />}
          </td>
        </tr>
        <tr>
          <td>Moves:</td>
          <td className="moves">
            <MovesView moves={pm.moves}></MovesView>
          </td>
        </tr>
      </table>
    </div>
  );
};

export const PokemonAbility = ({ ab }) => {
  const abilities = ab.map((ability) => {
    return ability.effect_entries
      .filter((entry) => entry.language.name === "en")
      .map((entry) => (
        <li key={`ability-${entry.name}`}>{entry.short_effect}</li>
      ));
  });
  return (
    <div className="pm_ability">
      <ul key={`abilities-ul`}>{abilities}</ul>
    </div>
  );
};

export const TypeView = (props) => {
  const types = props.types;

  const [type_detail, setType] = useState();

  useEffect(() => {

    const getType = async () => {
      return Promise.all(
        types.map((type) => apiGen.getTypeByName(type.type.name))
      );
    };

    async function run() {
      try {
        let res = await getType();
        setType(res);
      } catch (e) {
        console.error(e);
      }
    }
    run();
  }, [types]);

  return (
    <div>
      {!type_detail &&
        types.map((type) => <p key={type.type.name}>{type.type.name}</p>)}
      {type_detail &&
        type_detail.map((type) => {
          return (
            <div key={type.name}>
              <p key={`${type.name}-${type.id}`}>
                {type.name} {type.id}
              </p>
              <DamageRelationsView
                type={type}
                key={`DamageRelationView${type.name}`}
              ></DamageRelationsView>
            </div>
          );
        })}
    </div>
  );
};

// This should be a hover view
export const DamageRelationsView = (props) => {
  const type = props.type;
  const double_from = type.damage_relations.double_damage_from.map((type) => (
    <p key={`double_from_${type.name}`}>{type.name}</p>
  ));
  const double_to = type.damage_relations.double_damage_to.map((type) => (
    <p key={`double_to_${type.name}`}>{type.name}</p>
  ));
  const half_from = type.damage_relations.half_damage_from.map((type) => (
    <p key={`half_from_${type.name}`}>{type.name}</p>
  ));
  const half_to = type.damage_relations.half_damage_to.map((type) => (
    <p key={`half_to_${type.name}`}>{type.name}</p>
  ));
  const zero_from = type.damage_relations.no_damage_from.map((type) => (
    <p key={`zero_from_${type.name}`}>{type.name}</p>
  ));
  const zero_to = type.damage_relations.no_damage_to.map((type) => (
    <p key={`zero_to_${type.name}`}>{type.name}</p>
  ));

  // TODO: don't display the empty list from above
  return (
    <div>
      DOUBLE FROM: {double_from}
      DOUBLE TO: {double_to}
      HALF FROM: {half_from}
      HALF TO: {half_to}
      ZERO FROM: {zero_from}
      ZERO TO: {zero_to}
    </div>
  );
};
