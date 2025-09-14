export default function getWeather(inputValue, setWeatherData, setIsDataLoaded){
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=9304ca1da5ba357cf87e00d55ff74cde&units=metric`)
    .then(response => response.json())
    .then(json => {
      setWeatherData(json)
      setIsDataLoaded(true)
    })
    .catch((error) => console.log(error))
}