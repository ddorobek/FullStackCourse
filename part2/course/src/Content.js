import React from 'react';
import Part from './Part';

const Content = ({props}) => {
    
    return(
        <>
            {props.course.parts.map(element => (
                <Part part={element.name} exercise={element.exercises} />    
            ))}
        </>
    )
}

export default Content;