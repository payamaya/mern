import React, { useState, useEffect } from 'react'
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs'
import './darkmode.css'
function DarkMode() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }
  // removing the mode theme from the localstorge
  // localStorage.removeItem('theme')

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.body.className = theme
  }, [theme])

  return (
    <div className={`dark-mode__container ${theme}`}>
        <input
          type='checkbox'
          className='checkbox'
          id='checkbox'
          onClick={toggleTheme}
        />
        <label htmlFor='checkbox' className='label'>
          <BsFillMoonStarsFill className='moon' />
          <div className='ball' />
          <BsSunFill className='sun' />
        </label>
    </div>
  )
}
export default DarkMode
