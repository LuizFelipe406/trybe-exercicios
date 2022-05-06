import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    return (
    <div className='Pokemon'>
      <div className='PokeInfo'>
      <h2>Nome: {this.props.pokemon.name}</h2>
      <p>Tipo: {this.props.pokemon.type}</p>
      <p>Peso Médio: {`${this.props.pokemon.averageWeight.value} ${this.props.pokemon.averageWeight.measurementUnit}`}</p>
      </div>
      <div className='PokeImage'>
      <img src={this.props.pokemon.image} alt={`Pokemon ${this.props.pokemon.name}`}/>
      </div>
    </div>)
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string
    }),
    image: PropTypes.string,
  }).isRequired
};

export default Pokemon;