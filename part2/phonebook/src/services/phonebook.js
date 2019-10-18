import axios from 'axios';
const baseUrl = 'http://aqueous-eyrie-32840.herokuapp.com/api/persons'

const create = newObj => {
    const request = axios.post(baseUrl, newObj)
    return request.then(response => response.data)
}

const remove = newObj => {
    const delUrl = `${baseUrl}/${newObj.id}`
    const request = axios.delete(delUrl, newObj)
    return request.then(response => response.data)
}

const update = newObj => {
    const updateUrl = `${baseUrl}/${newObj.id}`
    const request = axios.put(updateUrl, newObj)
    return request.then(response => response.data)
}

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

export default { create, remove, update, getAll }