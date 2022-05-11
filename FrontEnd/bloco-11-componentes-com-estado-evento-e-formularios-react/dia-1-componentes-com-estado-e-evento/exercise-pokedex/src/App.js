import './App.css';
import Pokedex from './Pokedex';
import pokemons from './data';
import './mainPage.css';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <main className="PokemonDiv">
      <h1 className="PokemonTitle">Pokedex</h1>
      <Pokedex pokemons={pokemons}/>
      </main>
    );
  }
}

export default App;
