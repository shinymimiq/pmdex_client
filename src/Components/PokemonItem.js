const PokemonItem = ({pm_name, pm_sprite_url}) => {
  return (
    <div>
      <img ref={pm_sprite_url} alt={pm_name}></img>
      <h3>{pm_name}</h3>
    </div>
  )
}

export default PokemonItem
