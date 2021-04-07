import { useState, useEffect } from "react";
import "../Resources/iconfont.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import {useParams} from "react-router-dom";

import apiGen from "../Api/apiGen";

import { Link } from "react-router-dom";

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
          <PMInfoCard pm={pm} />
        )}
      </div>
    </div>
  );
};

// pm as a parameter
// Show: Sprites, Name, ID, types, weight, height, abilities.
const PMInfoCard = (props) => {
  const [abilities_info, setAbility_info] = useState();

  const types = props.pm.types.map((type) => (
    <p>{type.type.name}</p>
  ));
  const abilities = props.pm.abilities.map((ability) => (
    <p>{ability.ability.name}</p>
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
    run();
  }, [props]);

  return (
    <div className="pm_info_full">
      <Link to="/pokemon" style={{position:'fixed', top: '2%', left: '2%', zIndex:11}}><FontAwesomeIcon icon={faTimes}/></Link>
      
      <img src={props.pm.sprites.front_default} alt={props.pm.name} ></img>
      <table>
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
          <td>{types}</td>
      </tr>
      <tr>
          <td>Abilities:
          </td>
          <td>{abilities}</td>
          <td>
            {!abilities_info && "LOADING...."}
            {abilities_info && <PokemonAbility ab={abilities_info}/>}
          </td>
      </tr>
      </table>
    </div>
  );
};

const PokemonAbility = ({ab}) => {
  const abilities = ab.map((ability) => {
      return ability.effect_entries
            .filter(entry => (entry.language.name === 'en'))
            .map((entry) => (<li>{entry.short_effect}</li>))
    }
  ); 
  return (
    <div className="pm_ability">
      <ul>
        {abilities}
      </ul>
    </div>
  );
}

export default PokemonLink;
