import styles from './TodoSearch.module.css'

export const TodoSearch = ({ searchTerm, setSearchTerm, loading }) => {
  const handleSubmit = e => {
    e.preventDefault()
  }

  const searchValue = e => {
    console.log(e.target.value)
    setSearchTerm(e.target.value)
  }

  return (
    <div className={`${styles.container} ${loading && styles.entryLock}`}>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Claps..."
          value={searchTerm}
          onChange={searchValue}
          disabled={loading}
        />
      </form>
    </div>
  )
}
