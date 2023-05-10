// import Dropdowns from './Dropdowns'
import { FiChevronDown } from 'react-icons/fi'
import './dropdown.css'
// import { FaChevronCircleDown } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { subMenuItems } from './menuiItems'

const DropDownMenu = ({ items, depthLevel }) => {
  // const handleMenu = () => {
  //   console.log('clicked one')
  // }

  // const navlinkStyles = ({ isActive }) => {
  //   // isActive will be set to true if the link is indeed the current route, so we can use this to conditionally apply the styles
  //   //(styling with javascript)
  //   return {
  //     fontWeight: isActive ? 'bold' : 'normal',
  //     textDecoration: isActive ? 'none' : 'normal',
  //     color: isActive ? 'green' : 'normal',
  //   }
  // }

  return (
    <div className='dropdown-menu__wrapper'>
      <div className='navbar-dropdown'>
        <div className='dropdown-sorting'>
          <button className='dropbtn'>
            <FiChevronDown className='dropdown__icon' />
            Contacts
          </button>
          <div className='dropdown-content'>
            <ul className='menu'>
              {subMenuItems.map((item, index) => {
                return (
                  <NavLink key={index} to={item.link}>
                    {item.title}
                    <i>{item.icon}</i>
                  </NavLink>
                )
              })}
            </ul>

            {/* <ul className='menu'>
              {subMenuItems.map((item, index) => {
                item?.submenus && item?.submenus.lenght ? (
                  <li key={index}>
                    <Link to={'#'}>{item.title}</Link>
                  </li>
                ) : (
                  <li key={index}>
                    <Link to={item.title}>
                      {item.title}
                      {item.icon}
                    </Link>
                  </li>
                )
              })}
            </ul> */}

            {/* <div className='navbar-dropdown-submenu'>
              <div className='dropdown-sorting'>
                <button className='dropbtn'>
                  FAQ contacts
                  <FiChevronRight className='dropdown__icon' />
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DropDownMenu
