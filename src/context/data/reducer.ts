import { Action } from 'types'
import { State } from './context'
import {
  LOAD_QUERIES,
  QUERY,
  QUERY_FAILED,
  QUERY_SUCCESS,
  SAVE_QUERY,
  SET_LOADING,
  SET_QUERY,
} from './action-types'
import { setQueries } from 'utils/localStorageQueries'

export default (state: State, action: Action): State => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.payload }
    case QUERY:
      return { ...state, loading: true, submitting: true }
    case QUERY_FAILED:
      return {
        ...state,
        loading: false,
        submitting: false,
        error: action.payload,
        data: null,
      }
    case QUERY_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        submitting: true,
        error: null,
      }
    case SET_QUERY:
      return {
        ...state,
        query: action.payload,
      }
    case SAVE_QUERY:
      setQueries([action.payload, ...state.previousSearches])
      return {
        ...state,
        previousSearches: [action.payload, ...state.previousSearches],
      }
    case LOAD_QUERIES:
      return {
        ...state,
        previousSearches: [...action.payload],
        loading: false,
      }

    default:
      return state
  }
}
