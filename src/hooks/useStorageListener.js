import { useState } from 'react'

export function useStorageListener(synchronize) {
  const [changeStorage, setChangeStorage] = useState(false)

  addEventListener('storage', ({ key }) => {
    if (key === 'TODO_LIST') {
      setChangeStorage(true)
    }
  })

  const synchronizeData = () => {
    setChangeStorage(false)
    synchronize()
  }

  const handleCancel = () => setChangeStorage(false)

  return {
    change: changeStorage,
    cancel: handleCancel,
    synchronizeChange: synchronizeData
  }
}
