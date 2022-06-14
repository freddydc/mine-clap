import styles from './TodoSearch.module.css'

export const TodoSearch = () => {
  const handleSubmit = e => {
    e.preventDefault()
  }

  const searchValue = e => {
    console.log(e.target.value)
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input placeholder="Claps..." onChange={searchValue} />
      </form>
    </div>
  )
}
