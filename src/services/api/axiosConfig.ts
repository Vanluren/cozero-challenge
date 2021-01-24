import axios from 'axios'
import camelcaseKeys from 'camelcase-keys'
import { URL_STRINGS } from 'services/api'

/**
 * Instanciate the Axios instance for better control
 * set the base url so we from now on can use basic paths instead
 * set the timeout to 5 seconds
 */
const axiosInstance = axios.create({
  baseURL: URL_STRINGS.BASE_URL,
  timeout: 5000,
})

/**
 * Make sure we only recieve application/json;
 */
axiosInstance.defaults.headers = {
  common: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
}

/**
 * Rewrite the data to camelCase instead of snake_case
 */
axiosInstance.interceptors.response.use((res) => ({
  ...res,
  data: camelcaseKeys(res.data, { deep: true }),
}))

export default axiosInstance
