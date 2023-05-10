import axios from "axios";
const authFetch = axios.create({
  baseURL: 'http://localhost:3500',
  headers: {
    Accept: 'Application/json',
  },
})
export default authFetch