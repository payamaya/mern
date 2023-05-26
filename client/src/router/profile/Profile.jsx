// import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../components/utils/auth'
import './profile.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import avatar from '../../assets/avatar.svg'
const Profile = () => {
  const [items, setItems] = useState('')
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
  // const url = 'http://localhost:5175/items'

  const getAllItems = () => {
    // axios.get(`${url}`)
    axios
      .get('http://localhost:5175/items', {})
      .then((res) => {
        console.log(res)
        setItems(res.data)
      })
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    getAllItems(setItems)
  }, [])
  return (
    <div className='profile-container'>
      {/* login to visit this page */}
      <h1>Profile Page</h1>
      <p className='profile-username'>
        Welcome <span className='profile-span'>{auth.user}</span> to the profile page
      </p>
      {/* This will navigate you to home page navigate('/') */}
      {/* <button className='profile-btn' onClick={handleLogout}>Logout</button> */}

      <div className='profile__container-wrapper '>
        {items &&
          items.map((item, key) => {
            // destructure product
            const { _id, title, author, rating, pages, imageUrl } = item
            return (
              <ul className='profile__container' key={_id}>
                <li className='profile-list'>
                  <div className="profile-info">
                    <h2>{title}</h2>
                    <p>Name: {author}</p>
                    <p className='product__para'>pages: ${pages}</p>
                    <p className='product__para'>Rating:{rating}</p>
                  </div>
                  <figure>
                    <img
                      src={imageUrl || avatar}
                      alt={imageUrl}
                      className='skeleton'
                    />
                  </figure>
                  {/* <p>{id}</p> */}
                </li>
              </ul>
            )
          })}
      </div>
    </div>
  )
}
export default Profile
// Protected Route should be a reusable peice of code
// we used the AuthContext to display the logged in user and handle the logout button
