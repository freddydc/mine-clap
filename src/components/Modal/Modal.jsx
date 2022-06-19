import { createPortal } from 'react-dom'
import styles from './Modal.module.css'

export const Modal = ({ children }) => {
  return createPortal(
    <div className={styles.container}>{children}</div>,
    document.getElementById('modal')
  )
}
