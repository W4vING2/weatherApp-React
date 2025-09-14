import styles from './Data.module.css'

export default function Data({city, temp, weather, src}){
  return (
    <>
      <h2 className={styles.heading}>Weather in {city}</h2>
      <p className={styles.p}>{Math.floor(temp)}C</p>
      <p className={styles.p}>{weather}</p>
      <img
        src={src}
        alt="weather"
      />
    </>
  )
}