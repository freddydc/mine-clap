import { useContext } from 'react'
import { TodoContext } from '../context'
import styles from './TodoForm.module.css'

export const TodoForm = () => {
  const { setShowModal } = useContext(TodoContext)

  const handleCancel = () => {
    setShowModal(previousValue => !previousValue)
  }

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <div className={styles.container}>
      <h1>Add Todo</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input placeholder="Custom todo..." />
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
