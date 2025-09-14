import Input from "./components/Input/Input.jsx";
import './index.css'
import {useEffect, useState} from "react";
import getWeather from "./services/getWeather.js";
import {useWeather} from "./hooks/useWeather.js";
import Data from "./components/Data/Data.jsx";

export default function App() {
  const [inputValue, setInputValue] = useState('')
  const [isDataLoaded, setIsDataLoaded] = useState(false)
  const {weatherData, setWeatherData} = useWeather()

  useEffect(() => {
    console.log(weatherData)
  }, [weatherData])

  return (
    <>
      <h1>Weather App</h1>
      <Input onClick={() => getWeather(inputValue, setWeatherData, setIsDataLoaded)} value={inputValue} onChange={(event) => setInputValue(event.target.value)}/>
      {isDataLoaded ? <Data city={weatherData.name} temp={weatherData.main.temp} weather={weatherData.weather[0].main} src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}/> : ''}
    </>
  )
}
