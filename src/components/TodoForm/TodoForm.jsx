import { useState } from 'react'
import styles from './TodoForm.module.css'

export const TodoForm = ({ setShowModal, addTodo }) => {
  const [message, setMessage] = useState('')

  const handleCancel = () => {
    setShowModal(previousValue => !previousValue)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (message) {
      addTodo(message)
      setShowModal(previousValue => !previousValue)
    }
  }

  const handleEntry = e => {
    setMessage(e.target.value)
  }

  return (
    <div className={styles.container}>
      <h1>Add Todo</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Custom todo..."
            onChange={handleEntry}
            value={message}
          />
          <div>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    </div>
  )
}
