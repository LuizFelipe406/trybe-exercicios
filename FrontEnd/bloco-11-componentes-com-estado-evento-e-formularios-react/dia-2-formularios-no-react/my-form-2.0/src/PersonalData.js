import React from 'react';
import './PersonalData.css';

class PersonalData extends React.Component {

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
		const { onChange, onBlur, state } = this.props;
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
						value={state.nome}
						required
						onChange={onChange}
					></input>
				</label>

				<label className="inputDiv">
					<span className="inputSpan">Email:</span>
					<input
						className="inputText"
						type="email"
						maxLength="50"
						name="email"
						value={state.email}
						required
						onChange={onChange}
					></input>
				</label>

				<label className="inputDiv">
					<span className="inputSpan">CPF:</span>
					<input
						className="inputText"
						type="text"
						maxLength="11"
						name="cpf"
						value={state.cpf}
						required
						onChange={onChange}
					></input>
				</label>

				<label className="inputDiv">
					<span className="inputSpan">Endereço:</span>
					<input
						className="inputText"
						type="text"
						maxLength="200"
						name="endereco"
						value={state.endereco}
						required
						onChange={onChange}
					></input>
				</label>

				<label className="inputDiv">
					<span className="inputSpan">Cidade:</span>
					<input
						className="inputText"
						type="text"
						maxLength="28"
						name="cidade"
						value={state.cidade}
						required
						onChange={onChange}
						onBlur={onBlur}
					></input>
				</label>

				<div className="inputDiv">
					<span className="inputSpan">Estado:</span>
					<select
						className="inputText"
						name="estado"
						value={state.estado}
						onChange={onChange}
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
						onChange={onChange}
					></input>
					<label htmlFor="casa">Casa</label>
					<input
						type="radio"
						id="apartamento"
						name="tipo"
						value="Apartamento"
						onChange={onChange}
					></input>
					<label htmlFor="apartamento">Apartamento</label>
				</div>
			</fieldset>
		);
	}
}

export default PersonalData;
