import { useState } from 'react'
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
import { TodoHeader } from './components/TodoHeader'
import { TodoNotifier } from './components/TodoNotifier'

function withStorageListener(WrappedComponent) {
  return function StorageListener({ synchronize }) {
    const [changeStorage, setChangeStorage] = useState(false)

    addEventListener('storage', ({ key }) => {
      if (key === 'TODO_LIST') {
        setChangeStorage(true)
      }
    })

    const synchronizeData = () => {
      setChangeStorage(false)
      synchronize()
    }

    const handleCancel = () => setChangeStorage(false)

    return (
      <WrappedComponent
        change={changeStorage}
        synchronizeChange={synchronizeData}
        cancel={handleCancel}
      />
    )
  }
}

const TodoNotifierWithStorageListener = withStorageListener(TodoNotifier)

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
    setSearchTerm,
    synchronizeTodo
  } = useTodo()

  return (
    <Layout>
      <TodoHeader loading={loading}>
        <TodoCounter completed={completedTodo} total={totalTodo} />
        <TodoSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </TodoHeader>
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
        todoView={null}
      >
        {todo => (
          <TodoView
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            completeTodo={() => consumeTodo(todo.id)}
            deleteTodo={() => removeTodo(todo.id)}
          />
        )}
      </TodoList>
      {!!showModal && (
        <Modal>
          <TodoForm setShowModal={setShowModal} addTodo={addTodo} />
        </Modal>
      )}
      <TodoCreator showModal={showModal} setShowModal={setShowModal} />
      <TodoNotifierWithStorageListener synchronize={synchronizeTodo} />
    </Layout>
  )
}

export default App
