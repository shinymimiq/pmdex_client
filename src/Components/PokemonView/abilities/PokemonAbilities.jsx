import React from "react";

import { useState, useEffect } from "react";
import apiGen from "../../../Api/apiGen.js";

import "./PokemonAbilities.css";

export const PokemonAbilities = ({ ab }) => {
  const [abilities, setAbilities] = useState();

  const abilities_string = ab.map((a) => (
    <span key={a.ability.name} className="pm-ability-string">
      {a.ability.name}
      {a.is_hidden ? " (H)" : ""}
    </span>
  ));

  // TODO: Can I make this function reuseable via custom hooks?
  //       It is been used across different components
  useEffect(() => {
    const getAbility = async () => {
      return Promise.all(
        ab.map((a) => apiGen.getAbilityByName(a.ability.name))
      );
    };

    async function run() {
      try {
        let res = await getAbility();
        setAbilities(res);
      } catch (e) {
        console.error(e);
      }
    }
    run();
  }, [ab]);

  return <div className="pokemon-ability">{abilities_string}</div>;
};
