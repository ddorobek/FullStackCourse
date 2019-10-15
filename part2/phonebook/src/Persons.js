import React from 'react';

const Persons = (props) => {
    if (props.search === '') {
        return props.persons.map(person => <p key={person.name}>{person.name} {person.number}</p>)
    }
    else {
        const newPersons = props.persons.filter(person => person.name.toLowerCase().includes(props.search.toLowerCase()))
        return newPersons.map(person => <p key={person.name}>{person.name} {person.number}</p>)
    }
}

export default Persons;