// pm as a parameter
// Show: Sprites, Name, ID, types, weight, height, abilities.
const PMInfoCard = (props) => {
  return (
    <div className="PMInfoCard">
      <p>ID: {props.pm.id}</p>
      <p>Name: {props.pm.name}</p>
      <p>Height: {props.pm.height}</p>
      <p>Weight: {props.pm.weight}</p>
      {/* <p>Types: {props.pm.types}</p> */}
      {/* <p>Abilities: {props.pm.abilities}</p> */}
    </div>
  );
};

export default PMInfoCard;
