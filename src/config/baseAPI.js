import axios from "axios";

export const baseAPI = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
})

baseAPI.interceptors.request.use((request) => {
  const accessToken = localStorage.getItem('token')
  const accessHeader = `Bearer ${accessToken}`
  request.headers["Authorization"] = accessHeader
  return request
})

export default baseAPI