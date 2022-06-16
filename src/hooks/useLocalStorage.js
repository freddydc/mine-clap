import { useState } from 'react'

export function useLocalStorage(key, value) {
  const storage = localStorage.getItem(key)
  const parse = JSON.parse(storage)

  let stored = value

  if (!parse || parse.length === 0) {
    localStorage.setItem(key, JSON.stringify(value))
  } else {
    stored = parse
  }

  const [data, setData] = useState(stored)

  const setDataValue = data => {
    const chainData = JSON.stringify(data)
    localStorage.setItem(key, chainData)
    setData(data)
  }

  return [data, setDataValue]
}
