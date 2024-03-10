import './App.css'
import { useEffect } from 'react'
import Button from './components/Button'
import Card from './components/Card'
import Input from './components/Input'
import { useWeather } from './context/WeatherContext'

function App() {

  const weather = useWeather()
  // console.log(weather);

  useEffect(() =>{
    weather.fetchUserCurrentLocationData()
  }, [])

  return (
    <>
      <div className="App">
        <h1>Weather Forcast<img src={weather.data.current?.condition.icon} alt="weatherIcon" /></h1>
        <Input />
        <Button value='Search' onClick={weather.fetchData} />
        <Card />
      </div>
    </>
  )
}

export default App
