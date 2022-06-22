import styles from './TodoCreator.module.css'

export const TodoCreator = ({ showModal, setShowModal }) => {
  const createTodo = () => {
    setShowModal(previousValue => !previousValue)
  }

  return (
    <div className={`${styles.container} ${showModal && styles.close}`}>
      <button onClick={createTodo}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
    </div>
  )
}
