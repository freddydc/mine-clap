import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoView } from '../TodoView'
import { TodoCreator } from '../TodoCreator'
import { TodoContext } from '../context'
import { useContext } from 'react'
import { Modal } from '../Modal'
import { TodoForm } from '../TodoForm'
import { Skeleton } from '../Skeleton'

export const Layout = () => {
  const {
    todoList,
    filteredTodo,
    consumeTodo,
    removeTodo,
    loading,
    showModal,
    addTodo,
    searchTerm,
    completedTodo,
    totalTodo,
    setShowModal,
    setSearchTerm
  } = useContext(TodoContext)

  return (
    <>
      <TodoCounter completed={completedTodo} total={totalTodo} />
      <TodoSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <TodoList>
        {loading ? (
          <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </>
        ) : filteredTodo.length > 0 ? (
          filteredTodo.map(item => (
            <TodoView
              key={item.id}
              text={item.text}
              completed={item.completed}
              completeTodo={() => consumeTodo(item.id)}
              deleteTodo={() => removeTodo(item.id)}
            />
          ))
        ) : (
          todoList.map(item => (
            <TodoView
              key={item.id}
              text={item.text}
              completed={item.completed}
              completeTodo={() => consumeTodo(item.id)}
              deleteTodo={() => removeTodo(item.id)}
            />
          ))
        )}
      </TodoList>
      {!!showModal && (
        <Modal>
          <TodoForm setShowModal={setShowModal} addTodo={addTodo} />
        </Modal>
      )}
      <TodoCreator showModal={showModal} setShowModal={setShowModal} />
    </>
  )
}
