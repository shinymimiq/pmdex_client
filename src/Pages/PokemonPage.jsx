import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import apiGen from "../Api/apiGen";
import PokemonAvatar from "../Components/PokemonView/PokemonAvatar";
// import PokemonInfoView from "../Components/PokemonView/PokemonInfoView";
import LoadingPage from "./Loading";

import "./PokemonPage.css";

export const PokemonPage = () => {
  const { pmID } = useParams();
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    async function run() {
      let response = [];
      try {
        response = await apiGen.getPokemonByName(pmID);
      } catch (e) {
        console.error(e);
      }
      setPokemon(response);
    }
    run();
  }, [pmID]); // <-- Have to pass in [] here

  return (
    <div>
      {pokemon ? (
        <div className="pokemon-page">
          <div className="pm-details">
              <PokemonAvatar pm={pokemon} />
              <PokemonInfoBasic pm={pokemon}/>
              {/* <PokemonInfoView pm={pokemon} /> */}
          </div>
          <div className="pm-details2">
            <div className="info-left">
                  <PokemonBaseStats pm={pokemon}/>
                  <PokemonTrainBreed pm={pokemon}/>
                  <div className="pokemon-evo-chain">EVO CHAIN</div>
            </div>
            <div className="pokemon-move-list">MOVE LIST</div>
          </div>
        </div>
      ) : (
        <LoadingPage />
      )}
    </div>
  );
};

const PokemonInfoBasic = ({ pm }) => {
  return (
    <div className="pokemon-info-basic">
      <table>
        <tr>
          <td>ID:</td>
          <td>778</td>
        </tr>
        <tr>
          <td>Weight:</td>
          <td>0.7kg</td>
        </tr>
        <tr>
          <td>Height:</td>
          <td>0.2m</td>
        </tr>
        <tr>
          <td>Type:</td>
          <td>Fairy/Ghost</td>
        </tr>
        <tr>
          <td>Abilities:</td>
          <td>Disguise</td>
        </tr>
        <tr>
          <td></td>
          <td>Disguise</td>
        </tr>
      </table>
      <p>Dex Description</p>
      <p>
        It wears a rag fashioned into a Pikachu costume in an effort to look
        less scary. Unfortunately, the costume only makes it creepier.
      </p>
    </div>
  );
};

const PokemonBaseStats = ({ pm }) => {
  return (
    <div className="pokemon-base-stats">
      <table>
        <tr>
          <td>HP:</td>
          <td>55</td>
          <td>
            <div className="HP_pm"></div>
          </td>
        </tr>
        <tr>
          <td>ATK:</td>
          <td>90</td>
          <td>
            <div className="ATK_pm"></div>
          </td>
        </tr>
        <tr>
          <td>DEF:</td>
          <td>80</td>
          <td>
            <div className="DEF_pm"></div>
          </td>
        </tr>
        <tr>
          <td>SpA:</td>
          <td>50</td>
          <td>
            <div className="SPA_pm"></div>
          </td>
        </tr>
        <tr>
          <td>SpD:</td>
          <td>105</td>
          <td>
            <div className="SPD_pm"></div>
          </td>

        </tr>
        <tr>
          <td>SPE:</td>
          <td>96</td>
          <td>
            <div className="SPE_pm"
            // 米花帮我看看为什么没生效？
            // 希望达成：div宽度=（数值/255）%
            style={{width:"(96/255)*100%"}}></div>
          </td>
        </tr>
      </table>
    </div>
  );
};

const PokemonTrainBreed = ({ pm }) => {
  return (
    <div className="pokemon-train-breed">
      <p>Egg Group: Amorphous</p>
      <p>Hatch time: 5140-5396 steps</p>
    </div>
  );
};


