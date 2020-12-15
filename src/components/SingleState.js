import React  from 'react'
import Weather from './Weather'
import './../style/SingleState.css'

const SingleState = ({state}) => {
    

    return (
        <div>
            <img className="flag" align="right" src={state.flag} alt='flag' />
            <h2>{state.name}</h2>
            <p>Capital: {state.capital}</p>
            <p>Population: {state.population.toLocaleString()}</p>
            <h3>Languages</h3>
            <ul>
                {state.languages.map(lang => <li key={lang.name}>{lang.name}</li>)}
            </ul>

           <Weather state={state} />
        </div>
    )
}


export default SingleState
