export default function getWeather(
  inputValue,
  setWeatherData,
  setIsDataLoaded,
  setIsAnimation,
  setIsError,
) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=9304ca1da5ba357cf87e00d55ff74cde&units=metric`,
  )
    .then((response) => response.json())
    .then((json) => {
      if (json.cod === '404') {
        throw new Error('Oops, incorrect request')
      }
      setWeatherData(json)
      setIsDataLoaded(true)
      setIsAnimation(true)
      setTimeout(() => {
        setIsAnimation(false)
      }, 1000)
    })
    .catch((error) => {
      console.log(error)
      setIsError(true)
    })
}
