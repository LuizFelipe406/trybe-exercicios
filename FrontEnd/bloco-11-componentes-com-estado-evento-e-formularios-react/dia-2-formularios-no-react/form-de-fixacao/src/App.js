import './App.css';
import React from 'react';

class App extends React.Component {
  state = {
    email: '',
  };

  handleEmailChange = ({ target }) => {
    this.setState({ email: target.value });
  }

  render() {
    return (
      <div className="App">
        <h1>Form de Fixação!</h1>
        <form>
          <select>
            <option value="laranja">Laranja</option>
            <option value="limao">Limão</option>
            <option selected value="coco">Coco</option>
            <option value="manga">Manga</option>
          </select>
  
          <label>
            Email:
            <input type="email" name="email" value={ this.state.email } onChange={ this.handleEmailChange }></input>
          </label>
  
          <label>
            Senha:
            <input type="password"></input>
          </label>
  
          <textarea placeholder='Apenas algum texto em uma área de texto'></textarea>
        </form>
      </div>
    );
  }
}

export default App;
