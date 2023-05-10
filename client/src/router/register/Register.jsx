import { useRef, useState, useEffect } from 'react'
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import axios from '../api/api'
import axios from 'axios'
import './register.css'
import { useNavigate } from 'react-router-dom'
// default value is Bounce instead we use here Slide(Zoom, Flip)
import { Slide, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

//regex statment to validate the username and the passowrd
//user must stat with lower or uppercase between 3 to 23 characters, digits hyphens or underscore. Must be between 4 to 24 characters
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/
// passwrod regex requiers at least one lowercase letter, one uppercase letter, one digit and one special character and can be anywher from 8 to 24
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
const REGISTER_URL = 'http://localhost:5174/auth/register'
// ------------------------------------------------------//
const Register = () => {
  // can postiotn your toast position and the theme as well
  // can dec/increase the autoclose which by default is 5 sec and disable as well
  // const notify = () => toast.success('You succefully registered',{position:toast.POSITION.TOP_LEFT, theme: 'dark'});

  const navigate = useNavigate()
  const userRef = useRef()
  const errRef = useRef()

  const [username, setUsername] = useState('')
  const [validName, setValidName] = useState(false)
  const [userFocus, setUserFocus] = useState(false)

  const [password, setPassowrd] = useState('')
  const [validPwd, setValidPwd] = useState(false)
  const [pwdFocus, setPwdFocus] = useState(false)

  const [matchPwd, setMatchPwd] = useState('')
  const [validMatch, setValidMatch] = useState(false)
  const [matchFocus, setMatchFocus] = useState(false)

  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    setValidName(USER_REGEX.test(username))
  }, [username])

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(password))
    setValidMatch(password === matchPwd)
  }, [password, matchPwd])

  useEffect(() => {
    setErrMsg('')
  }, [username, password, matchPwd])

  const handleSubmit = async (e) => {
    e.preventDefault()
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(username)
    const v2 = PWD_REGEX.test(password)
    if (!v1 || !v2) {
      setErrMsg('Invalid Entry')
      return
    }
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ username, password }),
        {
          headers: { 'Content-Type': 'application/json' },
          // withCredentials: true,
        }
      )
      if (response.data.user) {
        toast.error('user exist')
        return
      } else {
        toast.success('connected succefully')
        setTimeout(() => {
          navigate('/auth/login')
          setSuccess(true)
        }, 3000)

        // navigate('/auth/login')
      }
      // alert('Registration succeed')
      // console.log(username)
      // console.log(response.data.user)
      // console.log(response?.data ===username)
      // console.log(response?.accessToken)
      // console.log(JSON.stringify(response))
      // navigate('/auth/login')
      //clear state and controlled inputs
      //need value attrib on inputs for this
      setUsername('')
      setPassowrd('')
      setMatchPwd('')
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response')
      } else if (err.response?.status === 409) {
        setErrMsg('Username Taken')
      } else {
        setErrMsg('Registration Failed')
      }
      errRef.current.focus()
    }
  }

  return (
    <div className='register__wrapper'>
      {success ? (
        <p>Redirecting</p>
      ) : (
        <section className='section'>
          <p
            ref={errRef}
            className={errMsg ? 'errmsg' : 'offscreen'}
            aria-live='assertive'
          >
            {errMsg}
          </p>
          <h1>Register</h1>
          <form className='register__form' onSubmit={handleSubmit}>
            <label htmlFor='username' className='register__label'>
              Username:
              <FontAwesomeIcon
                icon={faCheck}
                className={validName ? 'valid' : 'hide'}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validName || !username ? 'hide' : 'invalid'}
              />
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
              aria-invalid={validName ? 'false' : 'true'}
              aria-describedby='uidnote'
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
            <p
              id='uidnote'
              className={
                userFocus && username && !validName
                  ? 'instructions'
                  : 'offscreen'
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              4 to 24 characters.
              <br />
              Must begin with a letter.
              <br />
              Letters, numbers, underscores, hyphens allowed.
            </p>

            <label htmlFor='password' className='register__label'>
              Password:
              <FontAwesomeIcon
                icon={faCheck}
                className={validPwd ? 'valid' : 'hide'}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validPwd || !password ? 'hide' : 'invalid'}
              />
            </label>
            <input
              className='register__input'
              type='text'
              id='password'
              name='password'
              onChange={(e) => setPassowrd(e.target.value)}
              value={password}
              required
              aria-invalid={validPwd ? 'false' : 'true'}
              aria-describedby='pwdnote'
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            <p
              id='pwdnote'
              className={pwdFocus && !validPwd ? 'instructions' : 'offscreen'}
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              8 to 24 characters.
              <br />
              Must include uppercase and lowercase letters, a number and a
              special character.
              <br />
              Allowed special characters:{' '}
              <span aria-label='exclamation mark'>!</span>{' '}
              <span aria-label='at symbol'>@</span>{' '}
              <span aria-label='hashtag'>#</span>{' '}
              <span aria-label='dollar sign'>$</span>{' '}
              <span aria-label='percent'>%</span>
            </p>

            <label htmlFor='confirm_pwd' className='register__label'>
              Confirm Password:
              <FontAwesomeIcon
                icon={faCheck}
                className={validMatch && matchPwd ? 'valid' : 'hide'}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validMatch || !matchPwd ? 'hide' : 'invalid'}
              />
            </label>
            <input
              className='register__input'
              type='text'
              id='confirm_pwd'
              name='password'
              onChange={(e) => setMatchPwd(e.target.value)}
              value={matchPwd}
              required
              aria-invalid={validMatch ? 'false' : 'true'}
              aria-describedby='confirmnote'
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            <p
              id='confirmnote'
              className={
                matchFocus && !validMatch ? 'instructions' : 'offscreen'
              }
            >
              {/* <FontAwesomeIcon icon={faInfoCircle} /> */}
              Must match the first password input field.
            </p>

            <div className='toastify__btn'>
              <button
                // onClick={notify}
                className='register__btn'
                disabled={!validName || !validPwd || !validMatch ? true : false}
              >
                Sign Up
              </button>
              {/* Limit decides how many notification we want to show can hideProgressBar also*/}
              <ToastContainer
                transition={Slide}
                theme='dark'
                limit={1}
              ></ToastContainer>
            </div>
          </form>
          <p>
            Already registered?
            <br />
            <span className='line'>
              {/*put router link here*/}
              <a href='/auth/login'>Sign In</a>
            </span>
          </p>
        </section>
      )}
    </div>
  )
}

export default Register
