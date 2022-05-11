import './App.css';
import React from 'react';
import LoginInput from './LoginInput';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.fileInput = React.createRef();
	}

	state = {
		email: '',
		sucos: '',
		password: '',
		textarea: '',
		salvar: false,
    formularioComErros:false,
	};

	handleChange = ({ target }) => {
		const { name } = target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
    if(target.type === 'password') this.checkPassword(target);
		this.setState({ [name]: value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		alert(`Selected file - ${this.fileInput.current.files[0].name}`);
	};

  checkPassword = ({ type, value }) => {
    if(type === 'password') {
      if( value.length < 6 || value.length > 12 ) {
        this.setState({ formularioComErros: true });
      } else {
        this.setState({ formularioComErros: false });
      }
    }
  }

	render() {
		return (
			<div className="App">
				<h1>Form de Fixação!</h1>
				<form>
					<select
						name="sucos"
						value={this.state.sucos}
						onChange={this.handleChange}
					>
						<option value="laranja">Laranja</option>
						<option value="limao">Limão</option>
						<option selected value="coco">
							Coco
						</option>
						<option value="manga">Manga</option>
					</select>

					<fieldset name="login">
						<label>
							Email:
              <LoginInput type="email" value={this.state.email} onChange={this.handleChange} />
						</label>

						<label>
							Senha:
              <LoginInput type="password" value={this.state.password} onChange={this.handleChange} />
						</label>
					</fieldset>

					<textarea
						name="textarea"
						placeholder="Apenas algum texto em uma área de texto"
						value={this.state.textarea}
						onChange={this.handleChange}
					></textarea>

					<label>
						Lembrar email?
						<input
							type="checkbox"
							name="salvar"
							value={this.state.salvar}
							onChange={this.handleChange}
						></input>
					</label>

					<label>
						Upload file:
						<input
							type="file"
							onChange={this.handleSubmit}
							ref={this.fileInput}
						/>
					</label>
				</form>
			</div>
		);
	}
}

export default App;
