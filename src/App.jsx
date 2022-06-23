import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { TodoView } from './components/TodoView'
import { TodoCreator } from './components/TodoCreator'
import { Modal } from './components/Modal'
import { TodoForm } from './components/TodoForm'
import { Skeleton } from './components/Skeleton'
import { Layout } from './components/Layout'
import { useTodo } from './hooks/useTodo'

function App() {
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
  } = useTodo()

  return (
    <Layout>
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
    </Layout>
  )
}

export default App
