import React from "react";

import { useState, useEffect } from "react";
import { P } from "../../../Api/apiGen.js";

import { TYPE_COLOR } from "../../../Assets/PokemonTypes/PokemonTypeColour";

import "./PokemonTypes.css";

// the pokemon type components to get type details,
// and display type name with icon and color background?
export const PokemonTypes = ({ types }) => {
  const [types_detail, setTypes] = useState();

  // We know the types from pm object so we display it first
  // also we fetch the details in the background
  const types_string = types_detail
    ? types_detail.map((type) => (
        <div
          key={type.name}
          className={`pm-type-string hover-trigger p-1 rounded`}
          style={{ backgroundColor: `${TYPE_COLOR[type.name]}A0` }}
        >
          {type.names.find((n) => n.language.name === "en").name}
          <PokemonTypesView type={type} />
        </div>
      ))
    : "";

  // <PokemonTypesView
  // type={types_detail.find((t) => t.name === type.type.name)} />

  useEffect(() => {
    Promise.all(
      types.map((t) => {
        return P.resource(t.type.url);
      })
    )
      .then((res) => setTypes(res))
      .catch((e) => console.log(e));
  }, [types]);

  return <div className="pokemon-types">{types_string}</div>;
};

// Component of display types details: such as strengths and weakness
export const PokemonTypesView = () => {
  return (
    <div className="pokemon-type-view hover-target fixed w-20 h-20 bg-blue-200">
      <div className="type-strengths">x2 ...</div>
      <div className="type-weakness">x0.5 ...</div>
    </div>
  );
};
