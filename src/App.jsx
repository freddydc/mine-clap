import { useState } from 'react'
import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { TodoView } from './components/TodoView'
import { TodoCreator } from './components/TodoCreator'

import styles from './styles/Home.module.css'

const todoList = [
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
  const [searchTerm, setSearchTerm] = useState('')

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
      <TodoCounter />
      <TodoSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <TodoList>
        {filteredTodo.length > 0
          ? filteredTodo.map(item => (
              <TodoView
                key={item.id}
                text={item.text}
                completed={item.completed}
              />
            ))
          : todoList.map(item => (
              <TodoView
                key={item.id}
                text={item.text}
                completed={item.completed}
              />
            ))}
      </TodoList>
      <TodoCreator />
    </div>
  )
}

export default App
