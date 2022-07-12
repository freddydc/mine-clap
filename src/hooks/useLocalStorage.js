import { useEffect, useReducer } from 'react'

export function useLocalStorage(key, value) {
  const storage = localStorage.getItem(key)
  const parse = JSON.parse(storage)

  const [state, dispatch] = useReducer(reducer, initialState(value))
  const { data, loading, areSynchronize } = state

  const handleLoadData = data => {
    dispatch({
      type: actionTypes.loadData,
      payload: data
    })
  }

  const handleSaveData = newData => {
    dispatch({
      type: actionTypes.saveData,
      payload: newData
    })
  }

  useEffect(() => {
    setTimeout(() => {
      if (!parse || parse.length === 0) {
        localStorage.setItem(key, JSON.stringify(value))
        handleLoadData(value)
      } else {
        handleLoadData(parse)
      }
    }, 1000)
  }, [areSynchronize])

  const setDataValue = data => {
    const chainData = JSON.stringify(data)
    localStorage.setItem(key, chainData)
    handleSaveData(data)
  }

  const synchronizeData = () => {
    dispatch({
      type: actionTypes.synchronizeData
    })
  }

  return {
    data,
    setData: setDataValue,
    loading,
    synchronizeData
  }
}

const initialState = data => ({
  loading: true,
  areSynchronize: true,
  data
})

const actionTypes = {
  loadData: 'LOAD_DATA',
  saveData: 'SAVE_DATA',
  synchronizeData: 'SYNCHRONIZE_DATA'
}

const reducerData = (state, payload) => ({
  [actionTypes.loadData]: {
    ...state,
    data: payload,
    areSynchronize: true,
    loading: false
  },
  [actionTypes.saveData]: {
    ...state,
    data: payload
  },
  [actionTypes.synchronizeData]: {
    ...state,
    loading: true,
    areSynchronize: false
  }
})

const reducer = (state, action) => {
  return reducerData(state, action.payload)[action.type] ?? state
}
