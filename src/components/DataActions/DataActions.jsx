import styles from './DataActions.module.css'

export default function DataActions({ imgSrc, imgAlt, info, data }) {
  return (
    <>
      <div className={styles.actions}>
        <img className={styles.img} src={imgSrc} alt={imgAlt} />
        <div className={styles.actions__block}>
          <p>{info} &ensp;</p>
          <p>{data}</p>
        </div>
      </div>
    </>
  )
}
