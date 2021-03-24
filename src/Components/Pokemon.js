const PokemonItem = ({pm_name, pm_id, pm_sprite_url}) => {
  return (
    <div>
      <img src={pm_sprite_url} alt={pm_name}></img>
      <h3>#{pm_id} - {pm_name}</h3>
    </div>
  )
}

export default PokemonItem
