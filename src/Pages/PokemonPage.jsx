// import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import apiGen from "../Api/apiGen";
import PokemonAvatar from "../Components/PokemonView/PokemonAvatar";
import {
  PokemonInfoBasic,
  PokemonTrainBreed,
} from "../Components/PokemonView/PokemonInfoView";
import { PokemonBaseStats } from "../Components/PokemonView/PokemonStats";
import LoadingPage from "./Loading";

// import "./PokemonPage.css";

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
    <div className="pokemon-page w-full h-screen">
      <div className="pm-details w-full overflow-hidden">
        <PokemonAvatar pm={pokemon} />
        <PokemonInfoBasic pm={pokemon} />
        {/* <PokemonInfoView pm={pokemon} /> */}
      </div>
      <div className="pm-details2 w-full border">
        <div className="info-left w-full">
          <PokemonBaseStats pm={pokemon} />
          <PokemonTrainBreed pm={pokemon} />
          <div className="pokemon-evo-chain">EVO CHAIN</div>
        </div>
        <div className="pokemon-move-list">MOVE LIST</div>
      </div>
    </div>
  );
};
