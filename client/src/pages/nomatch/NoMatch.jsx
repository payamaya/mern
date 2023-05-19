import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './nomatch.css'
const NoMatch = () => {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      // we can use (-1) that's going to essentially simulate hitting the back button
      // navigate('/')
    }, 3000)
  }, [])
  // else we can use a link button to navigate manually
  return (
    <section className='nomatch'>
      <h1 className='error-num'>404</h1>
      <h1 className='error-page'>Page Not Found</h1>
    
    </section>
  )
}
export default NoMatch
