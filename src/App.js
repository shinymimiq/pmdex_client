import logo from './logo.svg';
import './App.css';

import {useState, useEffect } from 'react'
import PokemonItem from './Components/PokemonItem';

const App = () => {
  const [pmName, setPmName] = useState(null);
  const [pmID, setPmID] = useState(null);
  const [pmSpritesURL, setPmSpritesURL] = useState(null);

  useEffect(() => {
    // Hardcoded for now
    fetch("https://pokeapi.co/api/v2/pokemon/778")
    .then(results => results.json())
      .then(data => {
        setPmID(data.id);
        setPmName(data.species.name);
        setPmSpritesURL(data.sprites.front_default);
      });
  }, []); // <-- Have to pass in [] here!


  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <PokemonItem pm_name={pmName} pm_sprite_url={pmSpritesURL} pm_id={pmID}></PokemonItem>
    </div>
  );
}

export default App;
