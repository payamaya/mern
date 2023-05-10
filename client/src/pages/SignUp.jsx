import { useState } from 'react'
import axios from 'axios'
import { v4 as uuidv4} from 'uuid'
const url = 'http://localhost:3500/posts'
const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const handleSubmit = async (e) => {
    // we use navigate to navigate programmatically to where we want 
    e.preventDefault()
    try {
      // Universally Unique IDentifier uuid
      const resp = await axios.post(url, { name, email, id: uuidv4() })
      // const resp = await axios.post(url, { name: name, email: email })
      console.log(resp.data)
    } catch (error) {
      console.log(error.response)
    }
  }
  return (
    <section>
      <h2>Post SIGN UP</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input
            type='text'
            className='from-input'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            type='text'
            className='from-input'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      <button type='submit'>Submit</button>
      </form>
    </section>
  )
}
export default SignUp
