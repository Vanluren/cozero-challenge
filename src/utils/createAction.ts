import { Action } from 'types'

export const createAction = (type: string, payload?: unknown, meta?: unknown): Action => {
  if (typeof payload === 'undefined' && typeof meta === 'undefined') {
    return { type }
  } else if (typeof meta === 'undefined') {
    return { type, payload }
  } else {
    return { type, payload, meta }
  }
}
