import React from 'react'
import {TYPE_COLOR} from '../../Assets/PokemonTypeColour';

import './PokemonAvatar.css';

const PokemonAvatar = ( ) => {
  const pm = {
    types: [
      {type: 'ghost'},
      {type: 'fairy'}
    ]
  }

  return (
    <div className='pm-avatar'>
      <PokemonAvatarBackground types={pm.types}/>
      <div className='pm-avatar-foreground'>
        <div className='pm-sprite-container'>
          <img className='pm-sprite' src="https://img.pokemondb.net/sprites/sun-moon/shiny/mimikyu.png" alt="Mimikyu"/> 
        </div>
          <div className='pm-id-name-container'>
            <p className='pm-id-name'>#778  Mimikyu</p>
          </div>
      </div>
    </div>
  )
}

const PokemonAvatarBackground = ( { types }) => {
  return (
    <div className="pm-avatar-background" >
      <div className='pm-avatar-left' style={{ 'background-color': `${TYPE_COLOR[types[0].type]}`}}/>
      { types.length === 2 ? 
        <div className='pm-avatar-right' style={{ 'background-color': `${TYPE_COLOR[types[1].type]}`}}/>
        :
        null
      }
    </div>
  )

}

export default PokemonAvatar
