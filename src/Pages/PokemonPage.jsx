// import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import apiGen from "../Api/apiGen";
import PokemonAvatar from "../Components/PokemonView/PokemonAvatar";
import {PokemonBaseStats, PokemonInfoBasic, PokemonTrainBreed} from "../Components/PokemonView/PokemonInfoView";
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
            <PokemonInfoBasic pm={pokemon} />
            {/* <PokemonInfoView pm={pokemon} /> */}
          </div>
          <div className="pm-details2">
            <div className="info-left">
              <PokemonBaseStats pm={pokemon} />
              <PokemonTrainBreed pm={pokemon} />
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
