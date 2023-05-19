// import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../components/utils/auth'
import './profile.css'

const Profile = () => {
  // This is a protected route/page must loggin to vist
  // If your not logged in you will be redirected to login
  const auth = useAuth()
  // we call the hook
  // const navigate = useNavigate()

  // const handleLogout = (e) => {
  //   e.preventDefault()
  //   // we call auth.logout to log out onclick event
  //   auth.logout()
  //   // then we direct user to home page using navigate
  //   navigate('/')
  // }

  return (
    <div className='profile-container'>
      {/* login to visit this page */}
      <h1>Profile Page</h1>
      <p className='profile-username'>Welcome {auth.user} to the protected page</p>
      {/* This will navigate you to home page navigate('/') */}
      {/* <button className='profile-btn' onClick={handleLogout}>Logout</button> */}
    </div>
  )
}
export default Profile
// Protected Route should be a reusable peice of code
// we used the AuthContext to display the logged in user and handle the logout button
