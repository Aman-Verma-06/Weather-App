
const weatherUrl = 'https://api.weatherapi.com/v1/current.json?key=e6c156c458704152b39153009241902'

export const WeatherData = async(city) => {

    const response = await fetch(`${weatherUrl}&q=${city}&aqi=yes `)
    return await response.json();
}

export const WeatherDataLocation = async(lat, lon) => {

    const response = await fetch(`${weatherUrl}&q=${lat},${lon}&aqi=yes `)
    return await response.json();
}
