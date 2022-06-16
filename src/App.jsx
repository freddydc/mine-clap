import { useState } from 'react'
import { Layout } from './components/Layout'

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
  const todoListStorage = localStorage.getItem('TODO_LIST')

  const todoListParse = JSON.parse(todoListStorage)

  let todoListStored = staticTodoList

  if (!todoListParse || todoListParse.length === 0) {
    localStorage.setItem('TODO_LIST', JSON.stringify(staticTodoList))
  } else {
    todoListStored = todoListParse
  }

  const [todoList, setTodoList] = useState(todoListStored)
  const [searchTerm, setSearchTerm] = useState('')

  const completedTodo = todoList.filter(todo => !!todo.completed).length
  const totalTodo = todoList.length

  const storeTodoList = todoList => {
    const chainTodoList = JSON.stringify(todoList)
    localStorage.setItem('TODO_LIST', chainTodoList)
  }

  const consumeTodo = id => {
    const todoIndex = todoList.findIndex(todo => todo.id === id)
    const newTodo = [...todoList]
    const todo = newTodo[todoIndex]
    todo.completed = !todo.completed
    setTodoList(newTodo)
    storeTodoList(newTodo)
  }

  const removeTodo = id => {
    const todoIndex = todoList.findIndex(todo => todo.id === id)
    const newTodo = [...todoList]
    newTodo.splice(todoIndex, 1)
    setTodoList(newTodo)
    storeTodoList(newTodo)
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
      <Layout
        totalTodo={totalTodo}
        completedTodo={completedTodo}
        searchTerm={searchTerm}
        todoList={todoList}
        filteredTodo={filteredTodo}
        setSearchTerm={setSearchTerm}
        consumeTodo={consumeTodo}
        removeTodo={removeTodo}
      />
    </div>
  )
}

export default App
