import styles from './TodoSearch.module.css'

export const TodoSearch = ({ searchTerm, setSearchTerm }) => {
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
