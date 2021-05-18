// import React from "react";

import { useState, useEffect } from "react";
import apiGen from "../../../Api/apiGen.js";

import { TYPE_COLOR } from "../../../Assets/PokemonTypes/PokemonTypeColour";

import "./PokemonTypes.css";

// the pokemon type components to get type details,
// and display type name with icon and color background?
export const PokemonTypes = ({ pm }) => {
  const [types_detail, setTypes] = useState();

  // We know the types from pm object so we display it first
  // also we fetch the details in the background
  const types_string = pm.types.map((type) => (
    <span
      key={type.type.name}
      className="pm-type-string"
      style={{ backgroundColor: `${TYPE_COLOR[type.type.name]}` }}
    >
      {type.type.name}
      {types_detail ? (
        <PokemonTypesView
          type={types_detail.find((t) => t.name === type.type.name)}
        />
      ) : null}
    </span>
  ));

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
  return (
    <div></div>
    // <div className="pokemon-type-view">
      // This should be a hover view
      // <div className="type-strengths">x2 ...</div>
      // <div className="type-weakness">x0.5 ...</div>
    // </div>
  );
};
