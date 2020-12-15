import React, { useEffect, useState } from 'react'
import ListAll from './components/ListAll'
import Filter from './components/Filter'
import axios from 'axios'
import './style/App.css'

const App = () => {

    const [ states, setStates ] = useState([])
    const [ filter, setFilter ] = useState('')

    const hook = () =>{
        axios.get('https://restcountries.eu/rest/v2/all')
             .then(response => {
                 const serverStates = response.data
                 setStates(serverStates)
             })
    }
    useEffect(hook, [])

    const handleChange = (event) => {
        const newFilter = event.target.value
        setFilter(newFilter)
    }

    return (
        <div className="mainDiv">
            <h1>Countries</h1>
            <Filter filter = {filter} handleChange={handleChange}/>
            <ListAll states = {states} filter={filter} setFilter = {setFilter}/>
        </div>)
}


export default App

