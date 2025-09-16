import Input from './components/Input/Input.jsx'
import './index.css'
import {useEffect, useState} from 'react'
import getWeather from './services/getWeather.js'
import { useWeather } from './hooks/useWeather.js'
import Data from './components/Data/Data.jsx'
import Heading from "./components/Heading/Heading.jsx";

export default function App() {
  const [inputValue, setInputValue] = useState('')
  const [isDataLoaded, setIsDataLoaded] = useState(false)
  const { weatherData, setWeatherData } = useWeather()
  const [isAnimation, setIsAnimation] = useState(false)
  const [isError, setIsError] = useState(false)
  const [theme, setTheme] = useState('light')

  function changeTheme(){
    if (theme === 'light'){
      setTheme('dark')
    } else{
      setTheme('light')
    }
  }

  useEffect(() => {
    document.documentElement.setAttribute('color-scheme', theme === 'light' ? 'light' : 'dark')
    document.body.style.backgroundColor = theme === 'light' ? '#9575cd' : 'black';
  }, [theme])

  return (
    <>
      <Heading onClick={changeTheme} theme={theme}/>
      <Input
        theme={theme}
        onClick={() =>
          getWeather(
            inputValue,
            setWeatherData,
            setIsDataLoaded,
            setIsAnimation,
            setIsError,
            setInputValue
          )
        }
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      {isDataLoaded || isError ? (
        <Data
          theme={theme}
          city={isError ? '' : weatherData.name}
          temp={isError ? '' : weatherData.main.temp}
          weather={isError ? '' : weatherData.weather[0].main}
          src={isError ? '' : `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          windSpeed={isError ? '' : weatherData.wind.speed}
          humidity={isError ? '' : weatherData.main.humidity}
          isLoaded={isError ? '' : isAnimation}
          isError={isError}
        />
      ) : (
        ''
      )}
    </>
  )
}
