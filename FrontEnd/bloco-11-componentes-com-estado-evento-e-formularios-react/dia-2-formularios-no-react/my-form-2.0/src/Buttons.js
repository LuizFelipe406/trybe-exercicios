import React from 'react';
import './Buttons.css';

class Buttons extends React.Component {

  createResumo = (state) => {
    if ( state.click === true ){
      return(
        <div className="resumoDoForm">
          <span className="resumoSpan">Nome: {state.nome}</span>
          <span className="resumoSpan">Email: {state.email}</span>
          <span className="resumoSpan">CPF: {state.cpf}</span>
          <span className="resumoSpan">Endereço: {`${state.endereco} - ${state.tipo} - ${state.cidade}-${state.estado}`}</span>
          <span className="resumoSpan">Resumo do Curriculo: {state.resumoCurriculo}</span>
          <span className="resumoSpan">Cargo: {`${state.cargo} - ${state.resumoCargo}`}</span>
        </div>
      )
    } return '';
  }

  render() {
    const { state, onClickLimpar, onClickEnviar } = this.props;
    return (
      <div>
        <div className="btn-container">
        <button className="btn" onClick={ onClickEnviar }>Enviar</button>
        <button className="btn" onClick={ onClickLimpar } >Limpar</button>
        </div>
        <div className="resumo-container">
          {
            this.createResumo(state)
          }
        </div>
      </div>
    )
  }
}

export default Buttons;
