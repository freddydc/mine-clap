import styles from './TodoList.module.css'

export const TodoList = ({ loading, todoList, skeleton, todoView }) => {
  return (
    <div className={styles.container}>
      <ul>
        {loading && skeleton()}
        {!loading && todoList.map(todoView)}
      </ul>
    </div>
  )
}
