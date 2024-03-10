import React from 'react'
import { useWeather } from '../context/WeatherContext'


const Input = () => {

    const weather = useWeather()

    return (
        <input className='input-field'
            placeholder='Search here...'
            value={weather.search}
            onChange={(e) => weather.setSearch(e.target.value)}
        />
    )
}

export default Input
