import { useEffect, useState } from 'react'

export function useLocalStorage(key, value) {
  const storage = localStorage.getItem(key)
  const parse = JSON.parse(storage)

  const [loading, setLoading] = useState(true)

  const [data, setData] = useState(value)

  useEffect(() => {
    setTimeout(() => {
      if (!parse || parse.length === 0) {
        localStorage.setItem(key, JSON.stringify(value))
        setLoading(false)
      } else {
        setData(parse)
        setLoading(false)
      }
    }, 1000)
  }, [])

  const setDataValue = data => {
    const chainData = JSON.stringify(data)
    localStorage.setItem(key, chainData)
    setData(data)
  }

  return {
    data,
    setData: setDataValue,
    loading
  }
}
