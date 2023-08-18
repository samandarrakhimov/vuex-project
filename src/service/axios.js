import axios from "axios"
import { getItem } from "../persistane/persistaneStorage"


axios.defaults.baseURL='https://api.realworld.io/api'

axios.interceptors.request.use(config => {
   const token = getItem('token')
   const autherzetion = token ? `Token ${token}`:''
   config.headers.Authorization = autherzetion
   return config
})

export default axios