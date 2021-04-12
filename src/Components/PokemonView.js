import { useState, useEffect } from "react";
import "../Resources/iconfont.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import {useParams} from "react-router-dom";

import apiGen from "../Api/apiGen";

import { Link } from "react-router-dom";
import MovesView from "./MovesView";

// The link to the Pokemon Details page
const PokemonLink = () => {
  const {pm_id} = useParams();
  // const [state, setState] = useState({ full: true });
  const [pm, setPM] = useState();

  // let showPMInfoCard = () => {
  //   console.log("Hello");
  //   setState((prevState) => ({
  //     full: !prevState.full,
  //   }));
  // };

  useEffect(() => {
    async function getPokemon() {
      try {
        let res = await apiGen.getPokemonByName(pm_id);
        console.log(res);
        setPM(res);
      } catch(e) {
        console.error(e);
      }
    }
    getPokemon();
  }, [pm_id]);

  return (
    <div class="">
      {/* <div onClick={showPMInfoCard}> */}
      <div>
        {/* make sure pm is not null */}
        {pm && (
          <PokemonView pm={pm} />
        )}
      </div>
    </div>
  );
};

// pm as a parameter
// Show: Sprites, Name, ID, types, weight, height, abilities.
const PokemonView = (props) => {
  const [abilities_info, setAbility_info] = useState();

  const types = props.pm.types.map((type) => (
    <p key={type.type.name}>{type.type.name}</p>
  ));
  const abilities = props.pm.abilities.map((ability) => (
    <p key={ability.ability.name}>{ability.ability.name}</p>
  ));

  const getAbility = async () => {
    return Promise.all(props.pm.abilities.map(ab => apiGen.getAbilityByName(ab.ability.name)))
  }

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
    async function run() {
      try {
        let res = await getAbility();
        console.log("ABILITIES");
        console.log(res);
        setAbility_info(res);
      } catch(e) {
        console.error(e);
      }
    }
    console.log("Hello");
    run();
  }, [props]);

  return (
    <div className="pm_info_full">
      <Link to="/pokemon" style={{position:'fixed', top: '7%', left: '3%', zIndex:11}}><FontAwesomeIcon icon={faTimes}/></Link>
      
      <img src={props.pm.sprites.front_default} alt={props.pm.name} ></img>
      <table >
      <tr>
          <td>ID:</td>
          <td>{props.pm.id}</td>
      </tr>
      <tr>
          <td>Name:</td>
          <td>{props.pm.name}</td>
      </tr>
      <tr>
          <td>Height:</td>
          <td>{props.pm.height}</td>
      </tr>
      <tr>
          <td>Weight:</td>
          <td>{props.pm.weight}</td>
      </tr>
      <tr>
          <td>Types:</td>
          <td><TypeView types={props.pm.types}></TypeView></td>
      </tr>
      <tr>
          <td>Abilities:
          </td>
          <td className="Abilities">{abilities}</td>
          <td className="Abilities_full">
            {!abilities_info && "LOADING...."}
            {abilities_info && <PokemonAbility ab={abilities_info}/>}
          </td>
      </tr>
      <tr >
        <td>Moves:</td>
        <td className="moves"><MovesView moves={props.pm.moves}></MovesView></td>
      </tr>
      </table>
    </div>
  );
};

const PokemonAbility = ({ab}) => {
  const abilities = ab.map((ability) => {
      return ability.effect_entries
            .filter(entry => (entry.language.name === 'en'))
            .map((entry) => (<li key={`ability-${entry.name}`}>{entry.short_effect}</li>))
    }
  ); 
  return (
    <div className="pm_ability">
      <ul key={`abilities-ul`}>
        {abilities}
      </ul>
    </div>
  );
}


const TypeView = (props) => {
  const types = props.types;

  const [type_detail, setType] = useState();

  const getType = async () => {
    return Promise.all(types.map(type => apiGen.getTypeByName(type.type.name)))
  }

  useEffect(() => {
    async function run() {
      try {
        let res = await getType();
        console.log("TYPE!!!!");
        console.log(res);
        setType(res);
      } catch(e) {
        console.error(e);
      }
    }
    run();
  }, [types]);

  return (
    <div>
    {!type_detail && types.map(type => (<p key={type.type.name}>{type.type.name}</p>))}
    {type_detail && 
      type_detail.map(type => {
        return (
          <div key={type.name}>
          <p key={`${type.name}-${type.id}`}>{type.name} {type.id}</p>
          <DamageRelationsView type={type} key={`DamageRelationView${type.name}`}></DamageRelationsView>
          </div>
        )
      }
      )
    }
    </div>
  );
};

// This should be a hover view
const DamageRelationsView = (props) => {
  const type=props.type;
  const double_from = type.damage_relations.double_damage_from.map((type) => (<p key={`double_from_${type.name}`}>{type.name}</p>));
  const double_to = type.damage_relations.double_damage_to.map((type) => (<p key={`double_to_${type.name}`}>{type.name}</p>));
  const half_from = type.damage_relations.half_damage_from.map((type) => (<p key={`half_from_${type.name}`}>{type.name}</p>));
  const half_to = type.damage_relations.half_damage_to.map((type) => (<p key={`half_to_${type.name}`}>{type.name}</p>));
  const zero_from = type.damage_relations.no_damage_from.map((type) => (<p key={`zero_from_${type.name}`}>{type.name}</p>));
  const zero_to = type.damage_relations.no_damage_to.map((type) => (<p key={`zero_to_${type.name}`}>{type.name}</p>));
  
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
  )
}

export default PokemonLink;
