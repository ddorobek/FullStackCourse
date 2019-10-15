import React from 'react'

const Filter = (props) => {
    const handleSearch = (event) => {
        props.setSearch(event.target.value)
    }

    return (
        <input value={props.search} onChange={handleSearch} />
    )
}



export default Filter;