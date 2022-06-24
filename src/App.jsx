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
import { Message } from './components/Message'

function App() {
  const {
    todoList,
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
      <TodoList
        loading={loading}
        todoList={todoList}
        totalTodo={totalTodo}
        searchText={searchTerm}
        message={text => <Message message={text} />}
        skeleton={() => (
          <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </>
        )}
        todoView={todo => (
          <TodoView
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            completeTodo={() => consumeTodo(todo.id)}
            deleteTodo={() => removeTodo(todo.id)}
          />
        )}
      />
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
