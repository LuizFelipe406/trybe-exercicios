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
    }), () => { console.log(`${buttonText}: ${this.buttonColor(this.state[buttonText])}`) })
  }

  buttonColor (num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  render() {
    const { buttonText } = this.props;
    return (
      <button onClick={this.handleClick} style={{ backgroundColor: this.buttonColor(this.state[buttonText])}}>{`${buttonText}:${this.state[buttonText]}`}</button>
    )
  }
}

export default Button;
