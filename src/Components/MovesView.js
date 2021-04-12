// Moves View should contain these info:
// List of moves with 4 groups:
// Level-Up, Egg, TM/TR, Tutor
//
// Each move should have these info:
// Name, type, damage class (physical special), power, PP, priority, description
// + special effects, description in details.

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
      ({move_learn_method}) => move_learn_method.name === "level-up" 
    )
  );

  const egg_moves_list = filtered_moves_list.filter((move) =>
    move.version_group_details.find(
      ({move_learn_method}) => move_learn_method.name === "egg" 
    )
  );

  const tutor_moves_list = filtered_moves_list.filter((move) =>
    move.version_group_details.find(
      ({move_learn_method}) => move_learn_method.name === "tutor" 
    )
  );

  const machine_moves_list = filtered_moves_list.filter((move) =>
    move.version_group_details.find(
      ({move_learn_method}) => move_learn_method.name === "machine" 
    )
  );

  return (
    <div>
      <p>=====LEVEL UP======</p>
      <MovesList moves={level_up_moves_list}></MovesList>
      <p>=====EGG=====</p>
      <MovesList moves={egg_moves_list}></MovesList>
      <p>=====TM/TR=====</p>
      <MovesList moves={machine_moves_list}></MovesList>
      <p>=====TUTOR=====</p>
      <MovesList moves={tutor_moves_list}></MovesList>
    </div>
  );
};


const MovesList = (props) => {
  const list = props.moves.map((move) => (<p key={move.move.name}>{move.move.name}</p>))
  return (
    <div>
      {list}
    </div>
  );
};

export default MovesView;
