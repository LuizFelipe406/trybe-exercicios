import React from 'react';
import Pokemon from './Pokemon'
import Button from './Button';
import './Button.css';

class Pokedex extends React.Component {
  state = {
    pokemonPosition: 0,
    filterType:'All',
  }
  
  handleClickNext = (arrayDePokemons) => {
    this.setState((stateAnterior, props) => {
      if (stateAnterior.pokemonPosition === arrayDePokemons.length - 1) {
        return ({
          pokemonPosition: 0,
          filterType: stateAnterior.filterType,
        })
      } 
      return ({
        pokemonPosition: stateAnterior.pokemonPosition + 1,
        filterType: stateAnterior.filterType,
      });
  })
  }

  handleClickFilter = (filterType) => {
    this.setState({filterType,pokemonPosition: 0 });
  }

  getPokemonsFiltered = () => {
    const { pokemons } = this.props;
    const { filterType } = this.state;
    if (filterType === 'All') {
      return pokemons;
    }
    return pokemons.filter((pokemon) => pokemon.type === filterType);
  }

  getFilters = () => {
    const { pokemons } = this.props;
    return pokemons.reduce((acc,pokemon) => {
      if(acc.includes(pokemon.type)) {
        return acc;
      } return [...acc, pokemon.type]
    }, ['All']);
  }

  disableButton = (pokemonList) => (pokemonList.length === 1 ? true : false);


  render() {
    const pokemonsFiltered = this.getPokemonsFiltered();
    const { pokemonPosition } = this.state;
    const pokemon = pokemonsFiltered[pokemonPosition];
    const types = this.getFilters();
    return (
      <div>
       <Pokemon key={pokemon.id} pokemon={pokemon} />
       <div className="btn-container">
        <div className="btn-types-container">
        {types.map((type) => <Button key={ type } filter={ type } onClick={ () => this.handleClickFilter(type) }/>)}
        </div>
        <button className="btn-next" onClick={ () => this.handleClickNext(pokemonsFiltered) } disabled={this.disableButton(pokemonsFiltered)}>Próximo Pokemon</button>
        </div>
      </div>
    )
  }
}

export default Pokedex;
