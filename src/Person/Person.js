import React from 'react';
const full_name = 'Tran Thanh Loi'
const person = (props) => {
    return <p>
                <h1> 
                person {props.name} - age : {props.age} 
                </h1>
                <br/>
                {props.children}
            </p>
}
export  default person