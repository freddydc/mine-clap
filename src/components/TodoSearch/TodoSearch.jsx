import { useState } from 'react'
import styles from './TodoSearch.module.css'

export const TodoSearch = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
  }

  const searchValue = e => {
    console.log(e.target.value)
    setSearchTerm(e.target.value)
  }

  return [
    <div key="2-4" className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Claps..."
          value={searchTerm}
          onChange={searchValue}
        />
      </form>
    </div>,
    <p key="8-3">{searchTerm}</p>
  ]
}
