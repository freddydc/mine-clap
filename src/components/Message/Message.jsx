import styles from './Message.module.css'

export const Message = ({ message }) => {
  return <div className={styles.container}>{message}</div>
}
