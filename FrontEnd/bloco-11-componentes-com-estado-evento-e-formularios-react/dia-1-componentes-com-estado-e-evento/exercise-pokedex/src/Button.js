import React from 'react';
import './Button.css';

class Button extends React.Component {
  render() {
    const { filter, onClick } = this.props;
    return (
      <button className="btn-types" onClick={ onClick }>{filter}</button>
    )
  }
}

export default Button;
