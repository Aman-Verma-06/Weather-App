import React from 'react'
import { useWeather } from '../context/WeatherContext'

const Card = () => {

    const weather = useWeather()

    return (
        <div className='card'>
            <img src={weather.data.current?.condition.icon}
                alt="weatherIcon"
                style={{ width: '25%' }}
            />
            <h1 style={{ margin: '10px' }}>
                {weather.data.current?.temp_c} &#8451;
            </h1>
            <h2>{weather.data.location?.name},{' '}
                {weather.data.location?.region}
            </h2>
            <h1 style={{ margin: '15px' }}>
                {weather.data.location?.country}
            </h1>
        </div>
    )
}

export default Card
