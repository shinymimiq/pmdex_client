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
      < img src={props.pm.sprites.front_default} alt={props.pm.name} ></img>
      <table>
      <tr>
          <td>ID:</td>
          <td>{props.pm.id}</td>
      </tr>
      <tr>
          <td>Name:</td>
          <td>{props.pm.name}</td>
      </tr>
      <tr>
          <td>Height:</td>
          <td>{props.pm.height}</td>
      </tr>
      <tr>
          <td>Weight:</td>
          <td>{props.pm.weight}</td>
      </tr>
      <tr>
          <td>Types:</td>
          <td>{types}</td>
      </tr>
      <tr>
          <td>Abilities:</td>
          <td>{abilities}</td>
      </tr>
      </table>
    </div>
  );
};

export default PMInfoCard;
