import styles from './TodoCounter.module.css'

export const TodoCounter = () => {
  return (
    <div className={styles.container}>
      <h1>
        Completed: <span>2</span>
      </h1>
      <h1>
        Total: <span>5</span>
      </h1>
    </div>
  )
}
