const QUERIES_KEY = 'queries'
const getQueries = (): string[] => {
  try {
    const q = window.localStorage.getItem(QUERIES_KEY)
    if (q) {
      return q.split(',')
    }
    return []
  } catch (e) {
    throw new Error(e)
  }
}
const setQueries = (queries: string[]): void => {
  try {
    window.localStorage.setItem(QUERIES_KEY, queries.toString())
  } catch (error) {
    throw new Error('Could not set queries')
  }
}

export { getQueries, setQueries }
