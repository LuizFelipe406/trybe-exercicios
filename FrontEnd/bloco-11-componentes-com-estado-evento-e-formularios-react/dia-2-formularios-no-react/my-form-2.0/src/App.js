import React from 'react';
import './App.css';
import PersonalData from './PersonalData';

class App extends React.Component {
  render() {
    return (
      <div className="Form">
        <form>
        <PersonalData />
        </form>
      </div>
    );
  }
}

export default App;
