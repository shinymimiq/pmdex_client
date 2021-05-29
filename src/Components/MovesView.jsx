// Moves View should contain these info:
// List of moves with 4 groups:
// Level-Up, Egg, TM/TR, Tutor
//
// Each move should have these info:
// Name, type, damage class (physical special), power, PP, priority, description
// + special effects, description in details.

import { useEffect, useState } from "react";
import { P } from "../Api/apiGen";

import { TYPE_COLOR } from "../Assets/PokemonTypes/PokemonTypeColour.js";

const MovesView = (props) => {
  let moves = props.moves;
  // Each generation will have different move sets for a pokemon
  // Need to filter the correct generation first
  const filtered_moves_list = moves.filter((move) =>
    move.version_group_details.find(
      ({ version_group }) => version_group.name === "ultra-sun-ultra-moon"
    )
  );

  // TODO: to see if we can have some factory function to generate these four lists
  const level_up_moves_list = filtered_moves_list.filter((move) =>
    move.version_group_details.find(
      ({ move_learn_method }) => move_learn_method.name === "level-up"
    )
  );

  const egg_moves_list = filtered_moves_list.filter((move) =>
    move.version_group_details.find(
      ({ move_learn_method }) => move_learn_method.name === "egg"
    )
  );

  const tutor_moves_list = filtered_moves_list.filter((move) =>
    move.version_group_details.find(
      ({ move_learn_method }) => move_learn_method.name === "tutor"
    )
  );

  const machine_moves_list = filtered_moves_list.filter((move) =>
    move.version_group_details.find(
      ({ move_learn_method }) => move_learn_method.name === "machine"
    )
  );

  return (
    <div>
      <p>=====LEVEL UP======</p>
      <MovesListByCatagory
        moves_list={level_up_moves_list}
      ></MovesListByCatagory>
      <p>=====EGG=====</p>
      <MovesListByCatagory moves_list={egg_moves_list}></MovesListByCatagory>
      <p>=====TM/TR=====</p>
      <MovesListByCatagory
        moves_list={machine_moves_list}
      ></MovesListByCatagory>
      <p>=====TUTOR=====</p>
      <MovesListByCatagory moves_list={tutor_moves_list}></MovesListByCatagory>
    </div>
  );
};

const MovesListByCatagory = ({ moves_list }) => {
  const [moves, setMoves] = useState();

  useEffect(() => {
    Promise.all(
      moves_list.reduce((accm, move) => {
        return [...accm, P.resource(move.move.url)];
      }, [])
    )
      .then((res) => {
        setMoves(res);
      })
      .catch((e) => console.log(e));
  }, [moves_list]);

  return (
    <div className="moves-list-catagorised">
      {moves
        ? moves.map((m) => (
            <div key={m.id} className="flex justify-between">
              <span
                className="mx-2 px-1 py-0.5"
                style={{ backgroundColor: `${TYPE_COLOR[m.type.name]}A0` }}
              >
                {m.names.find((n) => n.language.name === "zh-Hans").name}
              </span>
              <span className="mx-2">{m.damage_class.name}</span>
              <span className="mx-2">Power: {m.power ? m.power : "-"}</span>
              <span className="mx-2">PP: {m.pp}</span>
              <span className="mx-2">
                Accuracy: {m.accuracy ? m.accuracy : "-"}
              </span>
            </div>
          ))
        : "loading"}
    </div>
  );
};

export default MovesView;
