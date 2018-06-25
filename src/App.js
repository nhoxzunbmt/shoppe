import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person'

class App extends Component {
  state = {
    persons : [
      {
        id : 1,
        name : 'Max 123' ,
        age : 19
      },
      {
        id : 2,
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

  deletePersonHandler = (personIndex) => {
      console.log(personIndex);
      const persons = [...this.state.persons];
      persons.splice(personIndex,1);
      this.setState({persons : persons});
  }

  render() {
    let persons = null;

    
    if(this.state.showPersons){
      persons = (<div>
        {this.state.persons.map((person, index) => {
          return <Person 
          key={person.id} 
          click={() => this.deletePersonHandler(index)} 
          changed={(event) => this.nameChangedHandler(event, person.id)}
          name={person.name} 
          age={person.age}/>
        })}
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
