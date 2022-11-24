import axios from 'axios'
import { env } from './config'
const CancelToken = axios.CancelToken
let cancel = null
const axiosInstance = axios.create({
  baseURL: env.REACT_APP_BACKEND_BASE_URL,
})
axiosInstance.interceptors.request.use(
  (config) => {
    if (cancel && config.url.match(/\/users/g, '')) {
      cancel()
    }
    config.cancelToken = new CancelToken(function executor(c) {
      cancel = c
    })
    const token = localStorage.getItem('token')
    if (token && !(config.method === 'put' && !config.url.replace(/account\/user/g, ''))) {
      config.headers['Authorization'] = 'Bearer ' + token
    }
    return config
  },
  (_err) => {
  },
)

axiosInstance.interceptors.response.use(
  (res) => {
    return res
  },
  (error) => {
    if (error && error.response && error.response.data && error.response.data.message) {
      return Promise.reject({ message: error.response.data.message, status: error.response.status })
    } else {
      //TODO: Will handle it gracefully once backend work is done!
      const { failedValidation, message } = error
      if (failedValidation) {
        return Promise.reject({ message: message })
      } else if (error?.status === 500) {
        return Promise.reject({ message: message })
      } else {
        return Promise.reject({ message: message })
      }
    }
  },
)
const restActions = {
  GET: (url, config = {}) => {
    return axiosInstance.get(url, config)
  },
  POST: (url, data, config = {}) => {
    return axiosInstance.post(url, data, config)
  },
  PUT: (url, data) => {
    return axiosInstance.put(url, data)
  },
  DELETE: (url, data, config = {}) => {
    return axiosInstance({ url, ...config, method: 'delete', data })
  },
  PATCH: (url, data, config = {}) => {
    return axiosInstance.patch(url, data, config)
  },
}

export default restActions
