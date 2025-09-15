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
}) {
  return (
    <>
      {isError ? (
        <div className={styles.error}>
          <img src="../../../public/404-img.jpeg" alt="404-error" />
          <p className={styles.p}>Oops, incorrect request!</p>
        </div>
      ) : (
        <div className={isLoaded ? styles.loaded : ''}>
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
