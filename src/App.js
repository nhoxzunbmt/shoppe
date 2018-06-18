import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  stage = {
    persons : [
      {
        name : 'Max 123' ,
        age : 19
      },
      {
        name : 'Loi Tran',
        age : 20
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Shoppe</h1>
        </header>
     

        <Person name={this.stage.persons[0].name} age="19">I'm Dev</Person>
        <Person name="Maximum" age="20"/>
      </div>
    );
  }
}

export default App;
