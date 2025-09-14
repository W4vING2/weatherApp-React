import {useState, useContext, createContext} from "react";

export const WeatherContext = createContext({})

export const WeatherProvider = ({children}) => {
  const [weatherData, setWeatherData] = useState({})
  return (
    <WeatherContext.Provider value={{weatherData, setWeatherData}}>
      {children}
    </WeatherContext.Provider>
  )
}