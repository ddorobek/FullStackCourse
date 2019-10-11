import React from 'react';
import Content from './Content';
import Header from './Header';
import Total from './Total';

const Course = (props) => {
    console.log(props)
    return(
        <>
            <Header props={props} />
            <Content props={props} />
            <Total props={props} />
        </>
    )
}

export default Course;