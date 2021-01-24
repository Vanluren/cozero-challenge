import { createContext, Dispatch } from 'react'
import { ContextState, Coin, Action } from 'types'

export interface State extends ContextState {
  query: string
  data: Coin | null
  dispatch: Dispatch<Action>
  submitting: boolean
  previousSearches: string[]
}

export const initialState: State = {
  loading: false,
  error: null,
  query: '',
  data: null,
  dispatch: () => null,
  submitting: false,
  previousSearches: [],
}

const DataContext = createContext<State>(initialState)

DataContext.displayName = 'DataContext'

export default DataContext
