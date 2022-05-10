import './App.css';
import Pokedex from './Pokedex';
import pokemons from './data';
import './Pokecss.css';

function App() {
  return (
    <main className="PokemonDiv">
    <Pokedex pokemons={pokemons}/>
    </main>
  );
}

export default App;
