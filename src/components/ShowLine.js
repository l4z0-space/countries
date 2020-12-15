import React from 'react'
import './../style/ShowLine.css'


const ShowLine = ({state, setFilter}) => {

    return (
    <li>{state.name} <button className="showButton" onClick={()=>setFilter(state.name)}>show</button></li>
    )
}

export default ShowLine