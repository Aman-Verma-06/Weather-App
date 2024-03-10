import React from 'react'
import { useWeather } from '../context/WeatherContext'

const Button = ({ value, onClick }) => {

    return (
        <button className='Btn'
            onClick={onClick}
        >{value}
        </button>
    )
}

export default Button
