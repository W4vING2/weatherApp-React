import styles from './Input.module.css'

export default function Input({ onChange, value, onClick, theme }) {
  return (
    <>
      <input
        value={value}
        onChange={onChange}
        type="text"
        id={styles.input}
        className={theme === 'light' ? styles.light : styles.dark}
        placeholder="Enter a city..."
      />
      <button onClick={onClick} id={styles.button} type="button" className={theme === 'light' ? styles.light : styles.dark}>
        <img
          src="../../../public/search-icon.svg"
          alt="search-icon"
          className={styles.img}
        />
      </button>
    </>
  )
}
