import React from 'react';
import Radium, {StyleRoot} from 'radium'
import classes from './Person.css';


const person = (props) => {
    const style = {
        '@media (min-width:500px)' : {
            width: '450px',
            color: 'blue'
        },
        '@media (max-width:500px)' : {
            width: '450px',
            color: 'yellow'
        }
    }
    return <div className="Person" style={style}>
                <span onClick={props.click}> 
                person {props.name} - age : {props.age} 
                </span>
                <input type="text" onChange={props.changed} defaultValue={props.value}/>
                {/* <button onClick={props.click}>Delete</button> */}
                <br/>
                {props.children}
            </div>
}
export default Radium(person)