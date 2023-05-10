// First you need to import axios
import axios from 'axios'

//  axios.get(`${process.env.REACT_APP_API}`) the name must match the name your given in the .env

export const getName = async () => {
  return await axios.get(`${process.env.VITE_API_KEY}`)
}
export const createName = async (name) => {
  return await axios.post(`${process.env.VITE_API_KEY}`, name)
}
export const removeName = async (id) => {
  return await axios.delete(`${process.env.VITE_API_KEY}/${id}`)
}
export const updateName = async (id, name) => {
  return await axios.put(`${process.env.VITE_API_KEY}`)
}

export default axios.create({
  baseURL: 'http://localhost:3500',
})