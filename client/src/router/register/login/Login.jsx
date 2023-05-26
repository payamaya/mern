import { useRef, useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useLocation } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { Slide, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useAuth } from '../../../components/utils/auth'

const LOGIN_URL = 'http://localhost:5174/auth/login'
// ------------------------------------------------------//
const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const redirectPath = location.state?.path || '/'
  const [cookies, setCookies] = useCookies(['access_token'])
  const userRef = useRef()
  const errRef = useRef()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    userRef.current.focus()
  }, [])

  const auth = useAuth()
  const handleSubmit = async (e) => {
    e.preventDefault()

    auth.login(username)
    const response = await axios.post(LOGIN_URL, { username, password })
    setCookies('access_token', response.data.token)
    // userID we get from  res.json({token, userID: user._id})in the users.js
    window.localStorage.setItem('userID', response.data.userID)
    // setSuccess(true)
    if (response.data.userID) {
      // console.log('No Server Response')
      toast.success('successfully')
      // console.log('wrong password username')
      setTimeout(() => {
        navigate('/profile')
      }, 3000)
    } else {
      localStorage.clear()
      auth.logout()
      toast.error('wrong password username')
      return
    }
  
  }

  return (
    <div className='register__wrapper'>
      {success ? (
        // navigate('/')
        <section>
          <h1>Something went wrong!</h1>
          <p>
            <a href='/'>welcome home</a>
          </p>
        </section>
      ) : (
        <section className='section'>
          <h1>Login</h1>
          <form className='register__form' onSubmit={handleSubmit}>
            <label htmlFor='username' className='register__label'>
              Username:
            </label>
            <input
              className='register__input'
              type='text'
              id='username'
              name='username'
              ref={userRef}
              autoComplete='off'
              onChange={(e) => setUsername(e.target.value)}
              // onChange={(e) => setUser(e.target.value)}
              value={username}
              required
            />

            <label htmlFor='password' className='register__label'>
              Password:
            </label>
            <input
              className='register__input'
              type='text'
              id='password'
              name='password'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />

            <button className='register__btn'>
              Login
            </button>
            <ToastContainer
              transition={Slide}
              theme='dark'
              limit={1}
            ></ToastContainer>
          </form>
          <p className='register__para'>
            Already registered?
            <br />
            <span className='line'>
              {/*put router link here*/}
              <a href='/register'>Sign In</a>
            </span>
          </p>
        </section>
      )}
    </div>
  )
}

export default Login
