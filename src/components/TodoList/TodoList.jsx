import styles from './TodoList.module.css'

export const TodoList = ({
  loading,
  todoList,
  skeleton,
  todoView,
  message,
  totalTodo,
  searchText
}) => {
  return (
    <div className={styles.container}>
      <ul>
        {loading && skeleton()}

        {!loading && totalTodo === 0 && message('Add new todo')}

        {!loading &&
          totalTodo !== 0 &&
          todoList.length === 0 &&
          message(`Not found todo ${searchText}`)}

        {!loading && todoList.map(todoView)}
      </ul>
    </div>
  )
}
