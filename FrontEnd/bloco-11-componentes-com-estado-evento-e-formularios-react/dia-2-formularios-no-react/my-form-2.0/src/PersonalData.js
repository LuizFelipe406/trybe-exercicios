import React from 'react';
import './PersonalData.css';

class PersonalData extends React.Component {
	state = {
		nome: '',
		email: '',
		cpf: '',
		endereco: '',
		cidade: '',
		estado: '',
		tipo: '',
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

	render() {
		const estados = [
			'Acre',
			'Alagoas',
			'Amapá',
			'Amazonas',
			'Bahia',
			'Ceará',
			'Distrito Federal',
			'Espirito Santo',
			'Goiás',
			'Maranhão',
			'Mato Grosso do Sul',
			'Mato Grosso',
			'Minas Gerais',
			'Pará',
			'Paraíba',
			'Paraná',
			'Pernambuco',
			'Piauí',
			'Rio de Janeiro',
			'Rio Grande do Norte',
			'Rio Grande do Sul',
			'Rondônia',
			'Roraima',
			'Santa Catarina',
			'São Paulo',
			'Sergipe',
			'Tocantins',
		];
		return (
			<fieldset>
				<h2>Dados Pessoais</h2>
				<label className="inputDiv">
					<span className="inputSpan">Nome:</span>
					<input
						className="inputText"
						type="text"
						maxLength="40"
						name="nome"
						value={this.state.nome}
						required
						onChange={this.handleChange}
					></input>
				</label>

				<label className="inputDiv">
					<span className="inputSpan">Email:</span>
					<input
						className="inputText"
						type="email"
						maxLength="50"
						name="email"
						value={this.state.email}
						required
						onChange={this.handleChange}
					></input>
				</label>

				<label className="inputDiv">
					<span className="inputSpan">CPF:</span>
					<input
						className="inputText"
						type="text"
						maxLength="11"
						name="cpf"
						value={this.state.cpf}
						required
						onChange={this.handleChange}
					></input>
				</label>

				<label className="inputDiv">
					<span className="inputSpan">Endereço:</span>
					<input
						className="inputText"
						type="text"
						maxLength="200"
						name="endereco"
						value={this.state.endereco}
						required
						onChange={this.handleChange}
					></input>
				</label>

				<label className="inputDiv">
					<span className="inputSpan">Cidade:</span>
					<input
						className="inputText"
						type="text"
						maxLength="28"
						name="cidade"
						value={this.state.cidade}
						required
						onChange={this.handleChange}
						onBlur={this.handleBlur}
					></input>
				</label>

				<div className="inputDiv">
					<span className="inputSpan">Estado:</span>
					<select
						className="inputText"
						name="estado"
						value={this.state.estado}
						onChange={this.handleChange}
						required
					>
						{estados.map((estado) => (
							<option key={estado} value={estado}>
								{estado}
							</option>
						))}
					</select>
				</div>
				<div className="inputRadio">
					<input
						type="radio"
						id="casa"
						name="tipo"
						value="Casa"
						onChange={this.handleChange}
					></input>
					<label htmlFor="casa">Casa</label>
					<input
						type="radio"
						id="apartamento"
						name="tipo"
						value="Apartamento"
						onChange={this.handleChange}
					></input>
					<label htmlFor="apartamento">Apartamento</label>
				</div>
			</fieldset>
		);
	}
}

export default PersonalData;
