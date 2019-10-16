import React from 'react';
import phonebookService from './services/phonebook'


const Persons = (props) => {

    const handleDelete = (person) => {
        console.log('delete')
        if (window.confirm(`Delete ${person.name} ?`)) {
            phonebookService.remove(person)
            props.setErrorMessage(`Deleted ${person.name}`)
            setTimeout(() => window.location.reload(), 2000)
            
        }
    }

    if (props.search === '') {
        return props.persons.map(person => <p key={person.name}>{person.name} {person.number}<button onClick={() => handleDelete(person)}>delete</button></p>)
    }
    else {
        const newPersons = props.persons.filter(person => person.name.toLowerCase().includes(props.search.toLowerCase()))
        return newPersons.map(person => (
            <>
                <p key={person.name}>{person.name} {person.number}</p>
                <button onClick={() => handleDelete(person)}>delete</button>
            </>
        ))
    }
}

export default Persons;