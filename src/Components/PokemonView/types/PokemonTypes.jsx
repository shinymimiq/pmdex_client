import React from "react";

import { useState, useEffect } from "react";
import { P } from "../../../Api/apiGen.js";

import { TYPE_COLOR } from "../../../Assets/PokemonTypes/PokemonTypeColour";

import "./PokemonTypes.css";

// the pokemon type components to get type details,
// and display type name with icon and color background?
export const PokemonTypes = ({ types }) => {
  const [types_detail, setTypes] = useState();

  useEffect(() => {
    Promise.all(
      types.map((t) => {
        return P.resource(t.type.url);
      })
    )
      .then((res) => setTypes(res))
      .catch((e) => console.log(e));
  }, [types]);

  return (
    <div className="pokemon-types">
      {types_detail ? <PokemonTypesContainer types={types_detail} /> : ""}
    </div>
  );
};

export const PokemonTypesContainer = ({ types }) => {
  const types_string = types.map((type) => (
    <div
      key={type.name}
      className={`pm-type-string p-1 rounded`}
      style={{ backgroundColor: `${TYPE_COLOR[type.name]}A0` }}
    >
      {type.names.find((n) => n.language.name === "en").name}
      {/* <PokemonTypesView type={type} /> */}
    </div>
  ));

  const { weakness, resistant } = filterWeakRes(
    getWeakness(types),
    getResistant(types)
  );
  const immune = getImmune(types);

  // console.log(weakness);
  // console.log(resistant);

  var weakness_types = Object.keys(weakness).map((type) => (
    <div
      key={type}
      className="weakness_type w-8 h-8"
      style={{ backgroundColor: `${TYPE_COLOR[type]}A0` }}
    >
      x{weakness[type] * 2}
    </div>
  ));
  var resistant_types = Object.keys(resistant).map((type) => (
    <div
      key={type}
      className="resistant_type w-8 h-8"
      style={{ backgroundColor: `${TYPE_COLOR[type]}A0` }}
    >
      /{resistant[type] * 2}
    </div>
  ));
  const immune_types = Object.keys(immune).map((type) => (
    <div
      key={type}
      className="immune_type w-8 h-8"
      style={{ backgroundColor: `${TYPE_COLOR[type]}A0` }}
    ></div>
  ));

  // const immune = {};
  Object.keys(immune_types).forEach((type) => {
    if (type in Object.keys(weakness_types)) {
      delete weakness_types[type];
    }
    if (type in Object.keys(resistant_types)) {
      delete resistant_types[type];
    }
  });

  return (
    <div className="pokemon-type-container hover-trigger flex">
      <div className="flex">{types_string}</div>
      <div className="hover-target absolute left-56 border-2 bg-white">
        <div className="flex">
          <span>Weakness:</span>
          {weakness_types}
        </div>
        <div className="flex">
          <span>Resistant:</span>
          {resistant_types}
        </div>
        <div className="flex">
          <span>Immune:</span>
          {immune_types}
        </div>
      </div>
    </div>
  );
};

const getWeakness = (types) => {
  var list = types.map(({ damage_relations }) => {
    return damage_relations.double_damage_from.map((i) => i.name);
  });
  if (list.length === 0) {
    return {};
  }

  if (list.length === 2) {
    list = list[0].concat(list[1]);
  } else {
    list = list[0];
  }
  var counts = list.reduce((map, val) => {
    map[val] = (map[val] || 0) + 1;
    return map;
  }, {});
  // console.log(counts);
  return counts;
};

const getResistant = (types) => {
  var list = types.map(({ damage_relations }) => {
    return damage_relations.half_damage_from.map((i) => i.name);
  });
  if (list.length === 0) {
    return {};
  }

  if (list.length === 2) {
    list = list[0].concat(list[1]);
  } else {
    list = list[0];
  }

  // var counts = list.reduce((map, val) => {
  //   map[val] = (map[val] || 0) + 1;
  //   return map;
  // }, {});
  var counts = list.reduce(function (prev, cur) {
    prev[cur] = (prev[cur] || 0) + 1;
    return prev;
  }, {});
  // console.log(counts);
  return counts;
};

const getImmune = (types) => {
  var list = types.map(({ damage_relations }) => {
    if (damage_relations.no_damage_from.length > 0) {
      return damage_relations.no_damage_from.map((i) => i.name);
    }
    return null;
  });
  // console.log(list);

  if (list.length === 2) {
    if (list[0] === null && list[1] === null) {
      return {};
    } else if (list[0] === null) {
      list = list[1];
    } else if (list[1] === null) {
      list = list[0];
    } else {
      list = list[0].concat(list[1]);
    }
  } else {
    if (list[0] === null) {
      return {};
    } else {
      list = list[0];
    }
  }

  // console.log(list);

  var counts = list.reduce(function (prev, cur) {
    prev[cur] = (prev[cur] || 0) + 1;
    return prev;
  }, {});
  // console.log(counts);
  return counts;
};

const filterWeakRes = (w, r) => {
  var weakness = Object.keys(w).reduce((accum, type) => {
    if (!(type in r)) {
      accum[type] = w[type];
    }
    return accum;
  }, {});

  var resistant = Object.keys(r).reduce((accum, type) => {
    if (!(type in w)) {
      accum[type] = r[type];
    }
    return accum;
  }, {});

  return { weakness, resistant };
};
