import { useContext } from 'react'
import { TodoContext } from '../context'
import styles from './TodoSearch.module.css'

export const TodoSearch = () => {
  const { searchTerm, setSearchTerm } = useContext(TodoContext)

  const handleSubmit = e => {
    e.preventDefault()
  }

  const searchValue = e => {
    console.log(e.target.value)
    setSearchTerm(e.target.value)
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Claps..."
          value={searchTerm}
          onChange={searchValue}
        />
      </form>
    </div>
  )
}
