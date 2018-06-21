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
    title_page : 'List study',
    showPersons : false
  }

  switchClick = (name) => {
    console.log('Was clicked')
    this.setState({
      persons : [
          {
            name : name ,
            age : 1993
          },
          {
            name : 'Loi Tran',
            age : 2018
          }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons : [
          {
            name : event.target.value,
            age : 1993
          },
          {
            name : event.target.value,
            age : 1993
          }
      ]
    })
  }

  togglePersonsHandler = () => {

  }

  render() {

    if(this.state.is_show_persons){
      persons = ({

      });
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Shoppe</h1>
        </header>

        <button onClick={this.togglePersonsHandler}>Click</button>

     

        <Person changed={this.nameChangedHandler} name={this.state.persons[0].name} age={this.state.persons[0].age}>I'm Dev</Person>
        
        <Person changed={this.nameChangedHandler} name={this.state.persons[1].name} age={this.state.persons[1].age}>I'm Account</Person>

    

      </div>
    );
  }
}

export default App;
