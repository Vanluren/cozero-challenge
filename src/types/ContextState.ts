import { Error } from './Error'

export interface ContextState {
  loading: boolean
  error?: Error
}
