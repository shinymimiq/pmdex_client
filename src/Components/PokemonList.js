import Pokemon from "./Pokemon";

// import { useState, useEffect } from "react";

const PokemonList = ({pms}) => {
  const pmList = pms.map((pm) => (
    // <li key={pm.name}>
      // <p>{pm}</p>
      <Pokemon pm={pm}/>
    // </li>
  ));
  return (
    <div>
      {pmList}
    </div>
  );
};

export default PokemonList;
