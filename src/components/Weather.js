import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './../style/Weather.css'

const Weather = ({state}) => {
    const [wData, setData] = useState({})
  
    const hook = () => {
        axios.get('http://api.weatherstack.com/current', {
            params:{
                access_key  : process.env.REACT_APP_API_KEY,
                query : state.capital
            }
        }).then(response => {
            console.log(response.data);
            setData(response.data.current)
        })
    }

    useEffect(hook, [])
    return(
        <div className ='weatherDiv'>
            <img alt="wather" align="right" className="weatherIcon" src={wData.weather_icons}/>
            <h3>Weather in {state.capital}</h3>
            <p>Temperature: {wData.temperature} Celcius </p>
            <p>Wind speed: {wData.wind_speed} mph </p>
            <p>Direction: {wData.wind_dir} </p>
        </div>
    )
}


export default Weather
