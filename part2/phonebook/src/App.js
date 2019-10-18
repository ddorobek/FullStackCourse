import React, { useState, useEffect } from 'react';
import Filter from './Filter';
import PersonForm from './PersonForm';
import Persons from './Persons';
import Notification from './Notification';
import axios from 'axios';
import styles from './App.css';

const App = () => {
  const [persons, setPersons] = useState([])
  const [search, setSearch] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      {errorMessage === '' 
      ? null 
      : <Notification message={errorMessage} />}
      <Filter search={search} setSearch={setSearch} />
      <h2>Add a new</h2>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        setErrorMessage={setErrorMessage}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} search={search} setErrorMessage={setErrorMessage} />
    </div>
  )
}



export default App