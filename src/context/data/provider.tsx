import React, { useReducer, useEffect, ReactNode, useRef, ReactElement } from 'react'
import { getQueries } from 'utils/localStorageQueries'
import { loadQueries, setLoadingState } from './actions'
import DataContext, { initialState } from './context'
import reducer from './reducer'

type ProviderProps = {
  children: ReactNode
}
const DataProvider = ({ children }: ProviderProps): ReactElement => {
  const firstRender = useRef(true)
  const [state, dispatch] = useReducer(reducer, initialState)

  // Get the prev queries from local storage on load
  useEffect(() => {
    if (firstRender && !state.previousSearches.length) {
      dispatch(setLoadingState(true))
      const prevQueries = getQueries()
      dispatch(loadQueries(prevQueries))
      firstRender.current = false
    }
  }, [])

  return <DataContext.Provider value={{ ...state, dispatch }}>{children}</DataContext.Provider>
}

export default DataProvider
