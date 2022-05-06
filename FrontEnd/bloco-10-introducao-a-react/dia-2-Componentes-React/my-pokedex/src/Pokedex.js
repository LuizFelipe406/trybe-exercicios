import React from 'react';
import Pokemon from './Pokemon'

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      pokemons.map( pokemonInfo => <Pokemon pokemon={pokemonInfo} />)
    )
  }
}

export default Pokedex;