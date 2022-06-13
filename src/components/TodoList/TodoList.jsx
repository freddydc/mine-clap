import styles from './TodoList.module.css'

export const TodoList = ({ children }) => {
  return (
    <div className={styles.container}>
      <ul>{children}</ul>
    </div>
  )
}
