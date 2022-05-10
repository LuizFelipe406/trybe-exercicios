import React from 'react';

function handleClick () {
  console.log('clicou')
}

class Button extends React.Component {
  render() {
    const { buttonText } = this.props;
    return (
      <button onClick={handleClick}>{buttonText}</button>
    )
  }
}

export default Button;
