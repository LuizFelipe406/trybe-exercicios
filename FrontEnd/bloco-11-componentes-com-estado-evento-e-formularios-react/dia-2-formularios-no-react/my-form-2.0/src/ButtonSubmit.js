import React from 'react';

class ButtonSubmit extends React.Component {
  state = {
    click: false,
  }

  handleClick = () => {
    this.setState((estadoAnterior, _props) => {
      if ( estadoAnterior.click === false ) {
        return { click: true };
      } return { click: false };
    })
  }

  createResumo = (state) => {
    if ( this.state.click === true ){
      return(
        <div className="resumoDoForm">
          <span>Nome:{state.nome}</span>
          <span>Email:{state.email}</span>
          <span>CPF:{state.cpf}</span>
          <span>Endereço:{`${state.endereco} - ${state.tipo} - ${state.cidade}-${state.estado}`}</span>
          <span>Resumo do Curriculo:{state.resumoCurriculo}</span>
          <span>Cargo:{`${state.cargo} - ${state.resumoCargo}`}</span>
        </div>
      )
    } return '';
  }

  render() {
    const { state } = this.props;
    return (
      <div>
        <button onClick={ this.handleClick }>Enviar</button>
        <div>
          {
            this.createResumo(state)
          }
        </div>
      </div>
    )
  }
}

export default ButtonSubmit;
