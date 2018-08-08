import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
      var helloWorld = 'Добро пожаловать в путь к изучению React';
      var user = {
          name: "Artem",
          surname: "Beresnev"
      };
    return (
      <div className="App">
        <h2>{helloWorld}</h2>
          <p>Меня зовут {user.name} {user.surname}</p>
      </div>
    );
  }
}

export default App;
