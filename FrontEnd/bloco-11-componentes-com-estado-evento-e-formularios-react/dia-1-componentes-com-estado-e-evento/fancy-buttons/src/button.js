import React from 'react';

class Button extends React.Component {

  constructor () {
    super();
    this.state = {
      'Primeiro Botão':0,
      'Segundo Botão':0,
      'Terceiro Botão':0,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    const { buttonMessage, buttonText } = this.props;
    console.log(buttonMessage);
    this.setState((estadoAnterior, _props) => ({
      [buttonText]: estadoAnterior[buttonText] + 1
    }))
  }

  render() {
    const { buttonText } = this.props;
    return (
      <button onClick={this.handleClick}>{`${buttonText}:${this.state[buttonText]}`}</button>
    )
  }
}

export default Button;
