import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../components/utils/auth'

const RequireAuth = ({ children }) => {
  // we call the hook
  const location = useLocation()
  // make sure to get hold on AuthContext by calling useAuth()
  const auth = useAuth()
  // we check if the user is not logged in
  if (!auth.user) {
    // we use useLocation to keep track of the redirection
    // we can make use of this state in login component
    return <Navigate to='/login' state={{ path: location.pathname }} />
  }
  // if the user is logged in we're going to return the children prop
  return children
}
export default RequireAuth
// we create the RequireAuth to check if the user is logged in or not
// if the user is not logged in , it will redirect to the login in route using location.pathname
// if is logged in it renders the children prop
// we wrap any components that needs to be protected with the RequireAuth components
// this is done when we configure the particular route
