import { useEffect, useState } from 'react'

export function useLocalStorage(key, value) {
  const storage = localStorage.getItem(key)
  const parse = JSON.parse(storage)

  const [loading, setLoading] = useState(true)
  const [synchronizedData, setSynchronizedData] = useState(true)

  const [data, setData] = useState(value)

  useEffect(() => {
    setTimeout(() => {
      if (!parse || parse.length === 0) {
        localStorage.setItem(key, JSON.stringify(value))
        setData(value)
        setLoading(false)
        setSynchronizedData(true)
      } else {
        setData(parse)
        setLoading(false)
        setSynchronizedData(true)
      }
    }, 1000)
  }, [synchronizedData])

  const setDataValue = data => {
    const chainData = JSON.stringify(data)
    localStorage.setItem(key, chainData)
    setData(data)
  }

  const synchronizeData = () => {
    setLoading(true)
    setSynchronizedData(false)
  }

  return {
    data,
    setData: setDataValue,
    loading,
    synchronizeData
  }
}
