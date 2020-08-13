import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://152.136.185.210:8000/api/z8',
  timeout: 3000
})

const requireURL = function (config) {
  return instance(config)
}

export default requireURL