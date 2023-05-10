// import DropDownMenu from '../DropDownMenu'
// import { NavLink, Link } from 'react-router-dom'
// import { FiMenu, FiX } from 'react-icons/fi'
// import { useAuth } from '../../components/utils/auth'
// import React, { useContext } from 'react'
// import DarkMode from '../../components/darkMode/DarkMode'
// import { ShopContext } from '../../context/CartContext'
// import Quantity from '../../pages/product/Quantity'
// import './navbar.css'
// const Navbar = () => {
//   const { cartItems } = useContext(ShopContext)
//   // style function, navLink component will set a property called isActive which can be destructured from the function
//   const navlinkStyles = ({ isActive }) => {
//     // isActive will be set to true if the link is indeed the current route, so we can use this to conditionally apply the styles
//     //(styling with javascript)
//     return {
//       fontWeight: isActive ? 'bold' : 'normal',
//       textDecoration: isActive ? 'none' : 'normal',
//       color: isActive ? 'white' : 'black',
//     }
//   }

//   const auth = useAuth()

//   return (
//     <header>
//       <nav className='primary-nav'>
//         {' '}
//         <NavLink style={navlinkStyles} to='/'>
//           LOGO
//         </NavLink>{' '}
//         <NavLink style={navlinkStyles} to='/about'>
//           About
//         </NavLink>
//         <NavLink style={navlinkStyles} to='/products'>
//           Products
//         </NavLink>
//         {/* For external website you can use a plain old html anchor tag target={"_blank"} */}
//         <NavLink style={navlinkStyles} to='/profile'>
//           Profile
//         </NavLink>
//         <DropDownMenu />
//         {/* if the user is not logged in render a link to lotgin route*/}
//         <div className='login-container'>
//           {!auth.user && (
//             <NavLink style={navlinkStyles} to='/login'>
//               Login
//             </NavLink>
//           )}
//           <NavLink style={navlinkStyles} to='/signup'>
//             Sign Up
//           </NavLink>
//           <NavLink style={navlinkStyles} to='/register'>
//             Register
//           </NavLink>
//         </div>
//         {/* cart icon goes here */}
//         <Link to='/cart'>
//           <Quantity value={cartItems} />
//         </Link>
//       </nav>
//       <nav className='primary-nav__mobile'>
//         {/* <label>
//           <input type='checkbox' />
//           <span className='menu'>
//             {' '}
//             <span className='hamburger'></span>{' '}
//           </span>{' '} */}
//         <NavLink style={navlinkStyles} className='mobile-logo' to='/'>
//           LOGO
//         </NavLink>{' '}
//         <NavLink style={navlinkStyles} to='/about'>
//           About
//         </NavLink>
//         <NavLink style={navlinkStyles} to='/products'>
//           Products
//         </NavLink>
//         {/* For external website you can use a plain old html anchor tag target={"_blank"} */}
//         <NavLink style={navlinkStyles} to='profile'>
//           Profile
//         </NavLink>
//         <DropDownMenu />
//         {/* if the user is not logged in render a link to lotgin route*/}
//         <div className='login-container'>
//           {!auth.user && (
//             <NavLink style={navlinkStyles} to='/login'>
//               Login
//             </NavLink>
//           )}
//           <NavLink style={navlinkStyles} to='/signup'>
//             Sign Up
//           </NavLink>
//           <NavLink style={navlinkStyles} to='/register'>
//             Register
//           </NavLink>
//         </div>
//         {/* cart icon goes here */}
//         <Link to='/cart'>
//           <Quantity value={cartItems} />
//         </Link>
//         {/* </label> */}
//       </nav>
//         <div className='hamburgare-mobile__icon'>
//           <label htmlFor='close-icon'>
//             <i className='SlMap'>
//               <FiMenu />
//             </i>
//           </label>
//           <label htmlFor='GrClose'>
//             <i className='GrClose'>
//               <FiX />
//             </i>
//           </label>
//         </div>
//       {/* <DarkMode /> */}
//     </header>
//   )
// }
// export default Navbar

// //by default Nalink recieves an active class when the link is the current route
// //NavLink is speciffically meant for building components like a navbar or breadcrumbs or a set of tabs where you would like to highlight the current seleted item and provide useful context with screen readers

// // Absolute links make more sense for components like the primary navigation bar, Absolute links start with /
import { NavLink, Link } from 'react-router-dom'
import { menuItems, hamburgareMenu } from './menu.json'
// import { GiHamburgerMenu } from 'react-icons/gi'
import './navbar.css'
import { useState } from 'react'
import filmlogo from '../../assets/filmlogo.svg'
import filmlogo2 from '../../assets/filmlogo2.svg'
import Quantity from '../../pages/product/Quantity'
import React, { useContext } from 'react'
import { ShopContext } from '../../context/CartContext'
// import DarkMode from '../../components/darkMode/DarkMode'
// import { FcFilmReel } from 'react-icons/fc'
// import Dropdown from '../../components/dropdown/Dropdown'
const Navbar = () => {
  const { cartItems } = useContext(ShopContext)
  const [showMenu, setShowMenu] = useState(false)
  // const onClick = () => setShowMenu(!showMenu)
  const handleClick = (event) => {
    event.currentTarget.classList.toggle('showMenu')
  }
  return (
    <header className='navbar__container'>
      <nav className='primary-nav'>
        <NavLink onClick={'#'} to='/'>
          {/* <FcFilmReel className='cameralight-menu' /> */}
          <img src={filmlogo} alt={filmlogo} className='cameralight-menu' />
        </NavLink>
        {menuItems &&
          menuItems.map((item, index) => {
            return (
              <ul className='menu' key={index}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </ul>
            )
          })}
        <Link to='/cart'>
          <Quantity value={cartItems} />
        </Link>
        {/* <Dropdown /> */}
      </nav>
      <div className='menu-icon__container'>
        <NavLink onClick={'#'} to='/'>
          <img
            src={filmlogo2}
            alt={filmlogo2}
            className='cameralight-menu filmlogo2'
          />
          {/* <FcFilmReel className='cameralight-menu' /> */}
        </NavLink>
        <div className='menu-hamburgare__logo'>
          {/* <GiHamburgerMenu className='menu-icon' /> */}
          <div
            className={showMenu ? 'menu-btn showMenu' : ''}
            onClick={() => setShowMenu(!showMenu)}
          >
            {/*'burger naimation '*/}
            <div className='menu-btn__burger'></div>
          </div>
        </div>
      </div>
      {showMenu ? (
        <nav className='nav__header'>
          <section className='menu-mobile__container'>
            {hamburgareMenu.map((item, index) => {
              return (
                <ul className='menu-mobile' key={index}>
                  <NavLink
                    onClick={() => setShowMenu(!showMenu)}
                    to={item.link}>
                    {item.title}
                  </NavLink>
                </ul>
              )
            })}
            {/* <Dropdown /> */}
          </section>
        </nav>
      ) : (
        showMenu
      )}
      {/* <DarkMode/> */}
    </header>
  )
}
export default Navbar
