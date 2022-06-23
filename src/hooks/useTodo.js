import { useState } from 'react'
import { useLocalStorage } from './useLocalStorage'
import { v4 as uuidV4 } from 'uuid'

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

export function useTodo() {
  const {
    data: todoList,
    setData: setTodoList,
    loading
  } = useLocalStorage('TODO_LIST', staticTodoList)
  const [searchTerm, setSearchTerm] = useState('')

  const [showModal, setShowModal] = useState(false)

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

  const addTodo = msg => {
    const newTodo = [...todoList]
    newTodo.push({
      id: uuidV4(),
      completed: false,
      text: msg
    })
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

  return {
    totalTodo,
    completedTodo,
    searchTerm,
    todoList,
    filteredTodo,
    setSearchTerm,
    consumeTodo,
    removeTodo,
    loading,
    showModal,
    setShowModal,
    addTodo
  }
}
