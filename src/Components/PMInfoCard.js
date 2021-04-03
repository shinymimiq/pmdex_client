// pm as a parameter
// Show: Sprites, Name, ID, types, weight, height, abilities.
const PMInfoCard = (props) => {
  const types = props.pm.types.map((type) => (
    <p>{type.type.name}</p>
  ));
  const abilities = props.pm.abilities.map((ability) => (
    <p>{ability.ability.name}</p>
  ));
  return (
    <div className="pm_info_full">
      <p>ID: {props.pm.id}</p>
      <p>Name: {props.pm.name}</p>
      <p>Height: {props.pm.height}</p>
      <p>Weight: {props.pm.weight}</p>
      <p>Types: {types}</p>
      <p>Abilities: {abilities}</p>
    </div>
  );
};

export default PMInfoCard;
