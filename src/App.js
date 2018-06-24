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
      this.setState({
        showPersons : !this.state.showPersons
      })
  }

  render() {
    let persons = null;

    
    if(this.state.showPersons){
      persons = (<div>
        <Person changed={this.nameChangedHandler} name={this.state.persons[0].name} age={this.state.persons[0].age}>I'm Dev</Person>
      </div>);
    }

    return (
      <div className="App">


        <button onClick={this.togglePersonsHandler}>Click</button>

     
        { this.state.showPersons ? persons : null}
       
    

      </div>
    );
  }
}

export default App;
