import React, {useState} from 'react';

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
          props.setPersons(props.persons.concat(personObj))
        }
        else {
          window.alert(`${newName} is already added to phonebook`)
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