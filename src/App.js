import React, { Component } from 'react';
import classes from './App.css';
import Radium, { StyleRoot } from 'radium'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {
        id: 1,
        name: 'Max 123',
        age: 19
      },
      {
        id: 2,
        name: 'Loi Tran',
        age: 20
      },
      {
        id: 3,
        name: 'Bebe',
        age: 25
      }
    ],
    title_page: 'List study',
    showPersons: false
  }

  switchClick = (name) => {
    console.log('Was clicked')
    this.setState({
      persons: [
        {
          name: name,
          age: 1993
        },
        {
          name: 'Loi Tran',
          age: 2018
        }
      ]
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    //const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  deletePersonHandler = (personIndex) => {
 
    console.log(personIndex);
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  render() {
    let persons = null;
    let style = {
      backgroundColor: 'green',
      color: '#FFF',
      ':hover': {
        backgroundColor: '#7BDFF2'
      }
    }

    let assignedClasses = []

    if (this.state.persons.length <= 2) {
      assignedClasses.push('red')
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push('bold')
    }


    if (this.state.showPersons) {
      persons = (<div>
        {this.state.persons.map((person, index) => {
          return <Person
            key={person.id}
            click={() => this.deletePersonHandler(index)}
            changed={(event) => this.nameChangedHandler(event, person.id)}
            name={person.name}
            age={person.age}
            key={person.id} />
        })}
      </div>);

      style.backgroundColor = 'yellow';
      style[':hover'] = {
        backgroundColor: 'green'
      }
    }

    return (
      <StyleRoot>
        <div className={classes.App}>
          <h1>List persons</h1>
          <p className={assignedClasses.join(' ')}>all person in company</p>
          <button style={style} onClick={this.togglePersonsHandler}>Show Persons</button>
          {this.state.showPersons ? persons : null}
        </div>
      </StyleRoot>
    );
  }
}

export default App;
