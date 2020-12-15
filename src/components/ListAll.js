import React from 'react'
import SingleState from './SingleState'
import ShowLine from './ShowLine.js'

const ListAll = (props) => {

    const states = props.states
    const filter = props.filter
    // If less than 11 filtered states then show them
    const toShow = states
                        .filter(state => state.name.toLowerCase().includes(filter.toLowerCase()))
                        

    return (
        <ul>
        { toShow.length === 1 
            ? < SingleState state={toShow[0]}/> 
            : toShow.length < 20
                ? toShow.map(state => <ShowLine key={state.name} state={state} setFilter={props.setFilter} />) 
                : "..."}
        </ul>
    )
}


export default ListAll

