import { TodoProvider } from './components/context'
import { Layout } from './components/Layout'

import styles from './styles/Home.module.css'

function App() {
  return (
    <TodoProvider>
      <div className={styles.container}>
        <Layout />
      </div>
    </TodoProvider>
  )
}

export default App
