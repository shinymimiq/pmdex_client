import React from "react";

import { useState, useEffect } from "react";
import { P } from "../../../Api/apiGen.js";

import "./PokemonAbilities.css";

export const PokemonAbilities = ({ ab }) => {
  const [abilities, setAbilities] = useState();

  useEffect(() => {
    Promise.all(
      ab.map((a) => {
        return P.resource(a.ability.url);
      })
    )
      .then((res) => {
        setAbilities(res);
      })
      .catch((e) => console.log(e));
  }, [ab]);

  const abilities_string = abilities
    ? abilities.map((a) => (
        <span key={a.name} className="pm-ability-string">
          {a.names.find((n) => n.language.name === "zh-Hans").name}
          {ab.find((i) => i.ability.name === a.name).is_hidden ? "(H)" : ""}
        </span>
      ))
    : "";

  return <div className="pokemon-ability">{abilities_string}</div>;
};
