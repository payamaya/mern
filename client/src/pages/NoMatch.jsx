import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const NoMatch = () => {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      // we can use (-1) that's going to essentially simulate hitting the back button
      navigate('/')
    }, 3000)
  }, [])
  // else we can use a link button to navigate manually
  return (
    <section>
      <h1>Page Not Found</h1>
    
    </section>
  )
}
export default NoMatch
