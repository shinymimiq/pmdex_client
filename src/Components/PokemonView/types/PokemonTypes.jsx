// import React from "react";

import { useState, useEffect } from "react";
import apiGen from "../../../Api/apiGen.js";

import { TYPE_COLOR } from "../../../Assets/PokemonTypeColour.js";

import "./PokemonTypes.css";

// the pokemon type components to get type details,
// and display type name with icon and color background?
export const PokemonTypes = ({ pm }) => {
  const [types, setTypes] = useState();

  const types_string = types
    ? types.map((type) => (
        <span
          key={type.name}
          className="pm-type-string"
          style={{ backgroundColor: `${TYPE_COLOR[type.name]}` }}
        >
          {type.name}
        </span>
      ))
    : "";

  // TODO: Can I make this function reuseable via custom hooks?
  //       It is been used across different components
  useEffect(() => {
    const getTypes = async () => {
      return Promise.all(
        pm.types.map((t) => apiGen.getTypeByName(t.type.name))
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
export const PokemonTypesView = () => {
  return <div className="pokemon-type-view"></div>;
};
