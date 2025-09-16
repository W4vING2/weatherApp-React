import styles from './Heading.module.css'
import ThemeIcon from "../../assets/ThemeIcon.jsx";

export default function Heading({onClick, theme}){
  return(
    <header id={styles.header} className={theme === 'light' ? styles.light : styles.dark}>
      <h1 id={styles.heading} className={theme === 'light' ? styles.light : styles.dark}>Weather App</h1>
      <button type="button" id={styles.btn} onClick={onClick} className={theme === 'light' ? styles.light : styles.dark}>
        <ThemeIcon color={theme === 'light' ? '#ede7f6' : '#3e148d'}/>
      </button>
    </header>
  )
}