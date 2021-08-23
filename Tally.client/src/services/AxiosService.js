import Axios from 'axios'
import { baseURL } from '../env'
export const tallyApi = Axios.create({
  baseURL,
  timeout: 8000
})

export const gameApi = Axios.create({
  baseURL,
  timeout: 8000
})
