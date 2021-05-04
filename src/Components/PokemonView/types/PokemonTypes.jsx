// import React from "react";

import { useState, useEffect } from "react";
import apiGen from "../../../Api/apiGen.js";

// A custom hook
import { usePMData } from "../../../Hooks/usePMData";

import { TYPE_COLOR } from "../../../Assets/PokemonTypeColour.js";

// the pokemon type components to get type details,
// and display type name with icon and color background?
export const PokemonTypes = ({ pm }) => {
  const getTypes = async () => {
    return Promise.all(pm.types.map((t) => apiGen.getTypeByName(t.type.name)));
  };

  const types = usePMData(getTypes);

  const types_string = pm.types.map((type) => (
    <span
      key={type.type.name}
      className="pm-type-string"
      style={{ backgroundColor: `${TYPE_COLOR[type.type.name]}` }}
    >
      {type.type.name}
    </span>
  ));

  return <div className="pokemon-types">{types_string}</div>;
};

// Component of display types details: such as strengths and weakness
export const PokemonTypesView = ({ types }) => {
  return <div className="pokemon-type-view"></div>;
};
