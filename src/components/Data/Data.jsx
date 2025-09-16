import styles from './Data.module.css'
import DataActions from '../DataActions/DataActions.jsx'

export default function Data({
  city,
  temp,
  weather,
  src,
  windSpeed,
  humidity,
  isLoaded,
  isError,
  theme
}) {
  return (
    <>
      {isError ? (
        <div id={styles.error} className={theme === 'light' ? styles.light : styles.dark}>
          <img src="../../assets/404-img.jpeg" alt="404-error" />
          <p className={styles.p_error}>Oops, incorrect request!</p>
        </div>
      ) : (
        <div id={isLoaded ? styles.loaded : ''} className={theme === 'light' ? styles.light : styles.dark}>
          <h2 className={styles.heading}>Weather in {city}</h2>
          <p className={styles.p}>{Math.floor(temp)}C</p>
          <p className={styles.p}>{weather}</p>
          <img src={src} alt="weather" />
          <DataActions
            data={windSpeed + 'km/h'}
            imgAlt="wind-icon"
            imgSrc="../../../public/wind-icon.svg"
            info="Speed:"
          />
          <DataActions
            data={humidity + '%'}
            imgAlt="humidity-icon"
            imgSrc="../../../public/humidity-icon.svg"
            info="Humidity:"
            isLastItem
          />
        </div>
      )}
    </>
  )
}
