import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons : [
      {
        name : 'Max 123' ,
        age : 19
      },
      {
        name : 'Loi Tran',
        age : 20
      }
    ],
    title_page : 'List study'
  }

  switchClick = () => {
    console.log('Was clicked')
    this.setState({
      persons : [
          {
            name : 'Max' ,
            age : 1993
          },
          {
            name : 'Loi Tran',
            age : 2018
          }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Shoppe</h1>
        </header>
        <button onClick={this.switchClick}>Click</button>
     

        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>I'm Dev</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>I'm Account</Person>

      </div>
    );
  }
}

export default App;
