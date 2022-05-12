import React from 'react';
import './App.css';
import PersonalData from './PersonalData';
import LastJob from './LastJob';
import Buttons from './Buttons';

class App extends React.Component {
	state = {
		nome: '',
		email: '',
		cpf: '',
		endereco: '',
		cidade: '',
		estado: '',
		tipo: '',
		resumoCurriculo: '',
		cargo: '',
		resumoCargo: '',
		click: false,
	};

	handleChange = ({ target }) => {
		const { name, value } = target;
		let valor = value;
		switch (name) {
			case 'nome':
				valor = value.toUpperCase();
				break;
			case 'endereco':
				valor = value
					.normalize('NFD')
					.replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '');
				break;
			default:
				valor = value;
		}
		this.setState({ [name]: valor });
	};

	handleBlur = ({ target }) => {
		const { value } = target;
		let valor = value.split('');
		valor = parseInt(valor[0], 10);
		if (isNaN(valor) === false) {
			this.setState({ cidade: '' });
		}
	};


  handleClickEnviar = () => {
    this.setState((estadoAnterior, _props) => {
      if ( estadoAnterior.click === false ) {
        return { click: true };
      } return { click: false };
    })
  }

	handleClickLimpar = () => {
		this.setState({
			nome: '',
			email: '',
			cpf: '',
			endereco: '',
			cidade: '',
			estado: '',
			tipo: '',
			resumoCurriculo: '',
			cargo: '',
			resumoCargo: '',
			click: false,
		});
	};

	render() {
		return (
			<div className="Form">
				<form>
					<PersonalData
						state={this.state}
						onChange={this.handleChange}
						onBlur={this.handleBlur}
					/>
					<LastJob state={this.state} onChange={this.handleChange} />
				</form>
				<Buttons onClickEnviar={ this.handleClickEnviar } onClickLimpar={ this.handleClickLimpar } state={this.state} />
			</div>
		);
	}
}

export default App;
