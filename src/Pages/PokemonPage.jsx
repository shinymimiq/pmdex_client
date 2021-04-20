import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import apiGen from "../Api/apiGen";
import PokemonAvatar from "../Components/PokemonView/PokemonAvatar";
import PokemonInfoView from "../Components/PokemonView/PokemonInfoView";
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
          <PokemonAvatar pm={pokemon} />
          <PokemonInfoView pm={pokemon} />
          <div className="pokemon-move-list">MOVE LIST</div>
          <div className="pokemon-evo-chain">EVO CHAIN</div>
        </div>
      ) : (
        <LoadingPage />
      )}
    </div>
  );
};
