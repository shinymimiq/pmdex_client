import React from "react";

import "./PokemonInfoView.css";

const PokemonInfoView = ({ pm }) => {
  return (
    <div className="pokemon-info-container">
      <PokemonInfoBasic />
      <PokemonBaseStats />
      <PokemonTrainBreed />
    </div>
  );
};


const PokemonInfoBasic = ({ pm }) => {
  return (
    <div className="pokemon-info-basic">
      <p>ID: 778</p>
      <p>Weight: 0.7kg</p>
      <p>Height: 0.2m</p>
      <p>Type: </p>
      <p> Fairy</p>
      <p> Ghost</p>
      <p>Abilities:</p>
      <p> Disguise</p>
      <p>Dex Description</p>
      <p>
        It wears a rag fashioned into a Pikachu costume in an effort to look
        less scary. Unfortunately, the costume only makes it creepier.
      </p>
    </div>
  );
};

const PokemonBaseStats = ({ pm }) => {
  return (
    <div className="pokemon-base-stats">
      <p>.HP: ===============______</p>
      <p>ATK: ==================___</p>
      <p>DEF: ===========__________</p>
      <p>SpA: =====________________</p>
      <p>SpD: ============_________</p>
      <p>SPE: ==============_______</p>
    </div>
  );
};

const PokemonTrainBreed = ({ pm }) => {
  return (
    <div className="pokemon-train-breed">
      <p>Egg Group: Amorphous</p>
      <p>Hatch time: 5140-5396 steps</p>
    </div>
  );
};

export default PokemonInfoView;
