import styles from './TodoCounter.module.css'

export const TodoCounter = ({ total, completed, loading }) => {
  return (
    <div className={`${styles.container} ${loading && styles.skeleton}`}>
      <h1>
        Completed: <span>{!loading && completed}</span>
      </h1>
      <h1>
        Total: <span>{!loading && total}</span>
      </h1>
    </div>
  )
}
