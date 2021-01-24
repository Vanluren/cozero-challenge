import { AxiosError } from 'axios'
import { Error as CustomError } from 'types'

const isAxiosError = (error: unknown): error is AxiosError => {
  return (error as AxiosError).isAxiosError !== undefined
}

export default (error: AxiosError | CustomError | null): CustomError => {
  if (!error) {
    return { message: 'Unknown error' }
  }
  if (isAxiosError(error)) {
    return {
      message: error.response?.data,
      status: error.response?.status,
    }
  }
  return { message: error.message }
}
