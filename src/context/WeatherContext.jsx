import { createContext, useContext, useState } from 'react'
import { WeatherData, WeatherDataLocation } from '../Api/WeatherData'

export const WeatherContext = createContext(null)

export const useWeather = () => {
    return useContext(WeatherContext)
}

export const WeatherProvider = ({ children }) => {
    const [data, setData] = useState('')
    const [search, setSearch] = useState('')

    const fetchData = async () => {
        const response = await WeatherData(search)
        setData(response)
    }

    const fetchUserCurrentLocationData = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            WeatherDataLocation(position.coords.latitude, position.coords.longitude).then((data) => setData(data))
        })
    }

    return (
        <WeatherContext.Provider value={{ search, data, setSearch, fetchData, fetchUserCurrentLocationData }}>
            {children}
        </WeatherContext.Provider>
    )
}
