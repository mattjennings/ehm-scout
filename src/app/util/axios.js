import axios from 'axios'

const axiosClient = axios.create()

if (process.env.NODE_ENV !== 'production') {
  axiosClient.defaults.proxy = {
    host: '127.0.0.1',
    port: process.env.PORT || 3000
  }
}

export default axiosClient
