import { useRef, useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { Slide, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// import axios from '../../../api/axios'
// const LOGIN_URL = 'baseURL/auth/login'
const LOGIN_URL = 'http://localhost:5174/auth/login'
// ------------------------------------------------------//
const Login = () => {
  //  const notify = () =>
  //    toast.success('You succefully registered', {
  //      position: toast.POSITION.TOP_LEFT,
  //      theme: 'dark',
  //    })
  const navigate = useNavigate()
  const [cookies, setCookies] = useCookies(['access_token'])
  const userRef = useRef()
  const errRef = useRef()

  const [username, setUsername] = useState('')
  // const [validName, setValidName] = useState(false)
  // const [userFocus, setUserFocus] = useState(false)

  const [password, setPassword] = useState('')
  // const [validPwd, setValidPwd] = useState(false)
  // const [pwdFocus, setPwdFocus] = useState(false)

  // const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    userRef.current.focus()
  }, [])

  // useEffect(() => {
  //   setValidName(USER_REGEX.test(username))
  // }, [username])

  // useEffect(() => {
  //   setValidPwd(PWD_REGEX.test(password))
  //   setValidMatch(password === matchPwd)
  // }, [password, matchPwd])

  // useEffect(() => {
  //   setErrMsg('')
  // }, [username, password])

  const handleSubmit = async (e) => {
    e.preventDefault()
    // alert('click')
    // if button enabled with JS hack
    // const v1 = USER_REGEX.test(username)
    // const v2 = PWD_REGEX.test(password)
    // if (!v1 || !v2) {
    //   setErrMsg('Invalid Entry')
    //   return
    // }
    // try {
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
        navigate('/')
      }, 3000)
    } else {
      toast.error('wrong password username')
    }
    // remove localstorage
    // window.localStorage.removeItem('userID', response.data.userID)
    // } catch (err) {
    //   // catch must be fixed
    //   if (!err.response.data.userID) {
    //     navigate('/register')
    //   }
    // }

    //  else if (err.response?.status === 409) {
    //   setErrMsg('Username Taken')
    // }
    // else {
    //   setErrMsg('Registration Failed')
    // }
    // errRef.current.focus()
  }

  return (
    <div className='register__wrapper'>
      {success ? (
        // navigate('/')
        <section>
          <h1>Something went wrong!</h1>
          <p>
            <a
              href='/
            '
            >
              welcome home
            </a>
          </p>
        </section>
      ) : (
        <section className='section'>
          {/* <p
            ref={errRef}
            className={errMsg ? 'errmsg' : 'offscreen'}
            aria-live='assertive'
          >
            {errMsg}
          </p> */}
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
              value={username}
              required
              // aria-invalid={validName ? 'false' : 'true'}
              // aria-describedby='uidnote'
              // onFocus={() => setUserFocus(true)}
              // onBlur={() => setUserFocus(false)}
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
              // aria-invalid={validPwd ? 'false' : 'true'}
              // aria-describedby='pwdnote'
              // onFocus={() => setPwdFocus(true)}
              // onBlur={() => setPwdFocus(false)}
            />
            {/* <p
              id='pwdnote'
              className={pwdFocus && !validPwd ? 'instructions' : 'offscreen'}
            ></p> */}

            <button
              onSubmit={handleSubmit}
              className='register__btn'
              // disabled={!validName || !validPwd || !validMatch ? true : false}
            >
              Sign Up
            </button>
            <ToastContainer
              transition={Slide}
              theme='colored'
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
