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
    data: todoData,
    setData: setTodoList,
    loading
  } = useLocalStorage('TODO_LIST', staticTodoList)
  const [searchTerm, setSearchTerm] = useState('')

  const [showModal, setShowModal] = useState(false)

  const completedTodo = todoData.filter(todo => !!todo.completed).length
  const totalTodo = todoData.length

  const consumeTodo = id => {
    const todoIndex = todoData.findIndex(todo => todo.id === id)
    const newTodo = [...todoData]
    const todo = newTodo[todoIndex]
    todo.completed = !todo.completed
    setTodoList(newTodo)
  }

  const removeTodo = id => {
    const todoIndex = todoData.findIndex(todo => todo.id === id)
    const newTodo = [...todoData]
    newTodo.splice(todoIndex, 1)
    setTodoList(newTodo)
  }

  const addTodo = msg => {
    const newTodo = [...todoData]
    newTodo.push({
      id: uuidV4(),
      completed: false,
      text: msg
    })
    setTodoList(newTodo)
  }

  let todoList = todoData

  if (searchTerm.length > 0) {
    todoList = todoData.filter(todo => {
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
    setSearchTerm,
    consumeTodo,
    removeTodo,
    loading,
    showModal,
    setShowModal,
    addTodo
  }
}
