import { useState } from 'react'
import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { TodoView } from './components/TodoView'
import { TodoCreator } from './components/TodoCreator'

import styles from './styles/Home.module.css'

const staticTodoList = [
  {
    text: 'FUZZ',
    completed: false,
    id: '1-2'
  },
  {
    text: 'FOO',
    completed: true,
    id: '5-4'
  }
]

function App() {
  const [todoList, setTodoList] = useState(staticTodoList)
  const [searchTerm, setSearchTerm] = useState('')

  const completedTodo = todoList.filter(todo => !!todo.completed).length
  const totalTodo = todoList.length

  const consumeTodo = id => {
    const todoIndex = todoList.findIndex(todo => todo.id === id)
    const newTodo = [...todoList]
    const todo = newTodo[todoIndex]
    todo.completed = !todo.completed
    setTodoList(newTodo)
  }

  const removeTodo = id => {
    const todoIndex = todoList.findIndex(todo => todo.id === id)
    const newTodo = [...todoList]
    newTodo.splice(todoIndex, 1)
    setTodoList(newTodo)
  }

  let filteredTodo = []

  if (searchTerm.length > 0) {
    filteredTodo = todoList.filter(todo => {
      const text = todo.text.toLowerCase()
      const searchText = searchTerm.toLowerCase()
      return text.includes(searchText)
    })
  }

  return (
    <div className={styles.container}>
      <TodoCounter total={totalTodo} completed={completedTodo} />
      <TodoSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <TodoList>
        {filteredTodo.length > 0
          ? filteredTodo.map(item => (
              <TodoView
                key={item.id}
                text={item.text}
                completed={item.completed}
                completeTodo={() => consumeTodo(item.id)}
                deleteTodo={() => removeTodo(item.id)}
              />
            ))
          : todoList.map(item => (
              <TodoView
                key={item.id}
                text={item.text}
                completed={item.completed}
                completeTodo={() => consumeTodo(item.id)}
                deleteTodo={() => removeTodo(item.id)}
              />
            ))}
      </TodoList>
      <TodoCreator />
    </div>
  )
}

export default App
