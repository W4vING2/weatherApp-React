import styles from './Input.module.css'

export default function Input({ onChange, value, onClick }) {
  return (
    <>
      <input
        value={value}
        onChange={onChange}
        type="text"
        id={styles.input}
        placeholder="Enter a city..."
      />
      <button onClick={onClick} id={styles.button} type="button">
        <img
          src="../../../public/search-icon.svg"
          alt="search-icon"
          className={styles.img}
        />
      </button>
    </>
  )
}
