// import React from "react";

import { useState, useEffect } from "react";
import apiGen from "../../../Api/apiGen.js";

import { TYPE_COLOR } from "../../../Assets/PokemonTypeColour.js";

// the pokemon type components to get type details,
// and display type name with icon and color background?
export const PokemonTypes = ({ pm }) => {
  const [types, setTypes] = useState();

  const types_string = pm.types.map((type) => (
    <span
      key={type.type.name}
      className="pm-type-string"
      style={{ backgroundColor: `${TYPE_COLOR[type.type.name]}` }}
    >
      {type.type.name}
    </span>
  ));

  // TODO: Can I make this function reuseable via custome hooks?
  //       It is been used accross different components
  useEffect(() => {
    const getTypes = async () => {
      return Promise.all(
        pm.types.map((t) => apiGen.getAbilityByName(t.types.name))
      );
    };

    async function run() {
      try {
        let res = await getTypes();
        setTypes(res);
      } catch (e) {
        console.error(e);
      }
    }
    run();
  }, [pm.types]);

  return <div className="pokemon-types">{types_string}</div>;
};

// Component of display types details: such as strengths and weakness
export const PokemonTypesView = ({ types }) => {
  return <div className="pokemon-type-view"></div>;
};
