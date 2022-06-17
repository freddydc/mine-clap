import { useContext } from 'react'
import { TodoContext } from '../context'
import styles from './TodoCounter.module.css'

export const TodoCounter = () => {
  const { totalTodo: total, completedTodo: completed } = useContext(TodoContext)

  return (
    <div className={styles.container}>
      <h1>
        Completed: <span>{completed}</span>
      </h1>
      <h1>
        Total: <span>{total}</span>
      </h1>
    </div>
  )
}
