import styles from './Skeleton.module.css'

export const Skeleton = () => {
  return (
    <li>
      <div className={styles.container}>
        <span></span>
        <div></div>
        <span></span>
      </div>
    </li>
  )
}
