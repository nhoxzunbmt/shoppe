import React from 'react';

import './Person.css';


const person = (props) => {
    return <div className="Person">
                <span> 
                person {props.name} - age : {props.age} 
                </span>
                <input type="text" onChange={props.changed} defaultValue={props.value}/>
                {/* <button onClick={props.click}>Delete</button> */}
                <br/>
                {props.children}
            </div>
}
export  default person 