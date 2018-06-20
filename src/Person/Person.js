import React from 'react';

import './Person.css';

const full_name = 'Tran Thanh Loi'
const person = (props) => {
    return <p class="Person">
                <span> 
                person {props.name} - age : {props.age} 
                </span>
                <input type="text" onChange={props.changed} defaultValue={props.value}/>
                <br/>
                {props.children}
            </p>
}
export  default person