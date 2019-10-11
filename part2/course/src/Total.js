import React from 'react';

const Total = ({props}) => {
    let total = 0;
    props.course.parts.forEach(element => {
        total += element.exercises
    });

    return(
        <h4>Total exercises {total}</h4>
    )
}

export default Total;