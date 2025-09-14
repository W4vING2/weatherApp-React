import {useContext} from "react";
import {WeatherContext} from "../services/weatherContext.jsx";

export const useWeather = () => {
  return useContext(WeatherContext);
};