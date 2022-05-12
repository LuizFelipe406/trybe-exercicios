import React from 'react';
import './LastJob.css';

class LastJob extends React.Component {
 state = {
   mouseEnter: false,
 };

 handleMouseEnter = () => {
   if(this.state.mouseEnter === false) {
     alert('Preencha com cuidado esta informação.')
   }
   this.setState({mouseEnter: true});
 }

  render() {
    const { state, onChange } = this.props;
    return(
      <fieldset>
        <label className="inputDiv">
          <span className="inputSpan">Resumo do Currículo:</span>
          <textarea 
          maxLength="1000"
          name="resumoCurriculo"
          required
          className="inputText"
          value={ state.resumoCurriculo }
          onChange={ onChange }
          ></textarea>
        </label>

        <label className="inputDiv">
          <span className="inputSpan">Cargo:</span>
          <textarea 
          maxLength="40"
          name="cargo"
          required
          onMouseEnter={this.handleMouseEnter}
          className="inputText"
          onChange={ onChange }
          value={ state.cargo }
          ></textarea>
        </label>

        <label className="inputDiv">
          <span className="inputSpan">Descrição do Cargo:</span>
          <textarea 
          maxLength="500"
          name="resumoCargo"
          required
          className="inputText"
          onChange={ onChange }
          value={ state.resumoCargo }
          ></textarea>
        </label>
      </fieldset>
    )
  }
}

export default LastJob;
