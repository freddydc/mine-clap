import styles from './TodoNotifier.module.css'

export const TodoNotifier = ({ change, cancel, synchronizeChange }) => {
  if (!change) {
    return null
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div>
          <p>Changed Todo In Another Tab</p>
        </div>
        <div>
          <button onClick={cancel}>Cancel</button>
          <button onClick={synchronizeChange}>Reload</button>
        </div>
      </div>
    </div>
  )
}
