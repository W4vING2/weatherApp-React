export default function getWeather(
  inputValue,
  setWeatherData,
  setIsDataLoaded,
  setIsAnimation,
  setIsError,
  setInputValue
) {
  setIsError(false)
  setIsDataLoaded(false)
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=9304ca1da5ba357cf87e00d55ff74cde&units=metric`,
  )
    .then((response) => {
      if (!response.ok) {
        if (response.status === 404){
          throw new Error('Oops, incorrect request')
        }
      }
      return response.json()
    })
    .then((json) => {
      setWeatherData(json)
      setIsDataLoaded(true)
      setIsAnimation(true)
      setInputValue('')
      setTimeout(() => {
        setIsAnimation(false)
      }, 1000)
    })
    .catch(() => {
      setIsError(true)
      setInputValue('')
    })
}
