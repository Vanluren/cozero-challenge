import { createAction } from 'utils/createAction'
import errorNormalizer from 'utils/errorNormalizer'
import { Action, Coin, Error } from 'types'
import {
  QUERY,
  QUERY_SUCCESS,
  QUERY_FAILED,
  SET_QUERY,
  SAVE_QUERY,
  LOAD_QUERIES,
  SET_LOADING,
} from './action-types'

const queryAction = (): Action => createAction(QUERY)
const querySuccess = (data: Coin): Action => createAction(QUERY_SUCCESS, data)
const queryError = (error: Error): Action => createAction(QUERY_FAILED, errorNormalizer(error))
const setQuery = (value: string): Action => createAction(SET_QUERY, value)
const saveQuery = (value: string): Action => createAction(SAVE_QUERY, value)
const loadQueries = (data: string[]): Action => createAction(LOAD_QUERIES, data)
const setLoadingState = (state: boolean): Action => createAction(SET_LOADING, state)

export { queryAction, querySuccess, queryError, setQuery, saveQuery, loadQueries, setLoadingState }
