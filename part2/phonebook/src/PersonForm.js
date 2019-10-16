import React, {useState} from 'react';
import phonebookService from './services/phonebook'

const PersonForm = (props) => {

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleNameChange = (event) => {
        setNewName(event.target.value)
      }
    
      const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
      }

      const handleSubmit = (event) => {
        event.preventDefault()
        if (props.persons.filter(person => person.name.toLowerCase() === newName.toLowerCase()).length === 0) {
          const personObj = { 
            name: newName, 
            number: newNumber 
          }
          phonebookService.create(personObj)
          props.setPersons(props.persons.concat(personObj))
          props.setErrorMessage(`Added ${personObj.name}`)
          setTimeout(() => props.setErrorMessage(''), 2000)
        }
        else {
          if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
            phonebookService.getAll().then(
              phonebook => {
                phonebook.forEach(person => {
                  if(person.name === newName) {
                    const personObj = {
                      name: newName,
                      number: newNumber,
                      id: person.id
                    }
                    phonebookService.update(personObj)
                    props.setErrorMessage(`${personObj.name}'s new phone number: ${personObj.number}`)
                    setTimeout(() => window.location.reload(), 2000)
                    
                  }
                });
              }
            )
          }
        }
        setNewName('')
        setNewNumber('')
      }

    return(
        <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}
export default PersonForm;