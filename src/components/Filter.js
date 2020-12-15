import React from 'react'
import './../style/Filter.css'


const Filter = (props) => {

    return (
        <div className='filterDiv'>
            Find Country <br/> <input value={props.filter} onChange={props.handleChange}/>
        </div>
    )
}


export default Filter

