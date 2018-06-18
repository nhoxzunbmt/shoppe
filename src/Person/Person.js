import React from 'react';
const full_name = 'Tran Thanh Loi'
const person = (props) => {
    return <p>
                <span> 
                person {props.name} - age : {props.age} 
                </span>
                <br/>
                {props.children}
            </p>
}
export  default person