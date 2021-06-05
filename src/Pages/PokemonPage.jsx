// import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { P } from "../Api/apiGen";
import PokemonAvatar from "../Components/PokemonView/PokemonAvatar";
import { PokemonInfoBasic } from "../Components/PokemonView/PokemonInfoView";
import { PokemonBaseStats } from "../Components/PokemonView/PokemonStats";
import LoadingPage from "./Loading";
import MovesView from "../Components/MovesView";

export const PokemonPage = () => {
  const { pmID } = useParams();
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    P.getPokemonByName(pmID)
      .then((res) => {
        setPokemon(res);
      })
      .catch((e) => console.log(e));
  }, [pmID]); // <-- Have to pass in [] here

  return (
    <div className="w-full h-full mt-0">
      {pokemon ? (
        <div className="pokemon-page w-full h-screen flex-col flex-1 mt-0">
          <PokemonAvatar pm={pokemon} />
          <PokemonInfoBasic pm={pokemon} />
          {/* <PokemonInfoView pm={pokemon} /> */}
          <div className="info-left w-full">
            <PokemonBaseStats pm={pokemon} />
            <div className="pokemon-evo-chain border m-5">EVO CHAIN</div>
          </div>
          <div className="pokemon-move-list min-h-1/3 max-h-1/2 overflow-y-scroll border m-5">
            <MovesView moves={pokemon.moves} />
          </div>
          <div className="border h-10 m-2 bg-blue-200"></div>
        </div>
      ) : (
        <LoadingPage />
      )}
    </div>
  );
};
