import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      setCountries(response.data)
    })
  }, [])

  // console.log(countries)

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  const showCountries = () => {
    if (countries.filter(country => country.name.toLowerCase().includes(search)).length > 10) {
        return (
          <div>
            <p>Too many matches, specify another filter</p>
          </div>
        )
    }

    let filteredCountries = countries.filter(country => country.name.toLowerCase().includes(search))
    if (filteredCountries.length === 1) {
      return showCountryDetails(search)
    }
    return filteredCountries.map(country => (
      <p key={country.id}>{country.name}<button onClick={() => {return showCountryDetails(country)}}>show</button></p>
    ))
  }

  const showCountryDetails = (showCountry) => {
    console.log('show', showCountry)
    let filteredCountries = countries.filter(country => country.name.toLowerCase().includes(showCountry.name.toLowerCase()))
    console.log(filteredCountries)
    return (
      filteredCountries.map(country => (
        <>
          <h1>{country.name}</h1>
          <p>capital: {country.capital}</p>
          <p>population: {country.population}</p>
          <h2>languages</h2>
          <ul>
            {country.languages.map(lang => <li>{lang.name}</li>)}
          </ul>
          <img src={country.flag} width='200px' height='100px' alt='flag' />
        </>
    ))
    )
  }

  return (
    <div>
      <p>find countries 
        <input value={search} onChange={handleChange}/>
      </p>
      {showCountries()}
    </div>
  )
}


export default App;
