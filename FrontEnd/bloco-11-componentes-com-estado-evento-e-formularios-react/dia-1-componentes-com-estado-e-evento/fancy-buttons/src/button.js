import React from 'react';

class Button extends React.Component {

  constructor () {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    const { buttonMessage } = this.props;
    console.log(buttonMessage);
  }

  render() {
    const { buttonText } = this.props;
    return (
      <button onClick={this.handleClick}>{buttonText}</button>
    )
  }
}

export default Button;
