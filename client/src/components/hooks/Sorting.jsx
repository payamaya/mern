import { useState, useEffect } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import getName from '../../api/api'
import { useContext } from 'react'
import { ShopContext } from '../../context/CartContext'


const Sorting = () => {
  const { addToCart, removeItem } = useContext(ShopContext)
  const [items, setItems] = useState()
  const retrievItems = async () => {
    const response = await getName('/items')
    return response.data
  }
  useEffect(() => {
    retrievItems()
  })
  useEffect(() => {
    const getAllItems = async () => {
      const allItems = await retrievItems()
      if (allItems) setItems(allItems)
    }
    getAllItems()
  }, [])
  // ----------Sorting-Functions----------------
  const ascendingEvent = () => {
    let data = [...items]
    if (data.length > 0) {
      let result = data.sort((a, b) => a.name.localeCompare(b.name))
      setItems(result)
    }
  }
  const descendingEvent = () => {
    let data = [...items]
    if (data.length > 0) {
      let result = data.sort((a, b) => b.name.localeCompare(a.name))
      setItems(result)
    }
  }
  const sortByPrice = () => {
    let data = [...items]
    if (data.length > 0) {
      let result = data.sort((a, b) => (a.price > b.price ? 1 : -1))
      setItems(result)
    }
  }
  const sortByLowPrice = () => {
    let data = [...items]
    if (data.length > 0) {
      let result = data.sort((a, b) => (b.price > a.price ? 1 : -1))
      setItems(result)
    }
  }
  return (
    <div className='navbar-dropdown'>
      <div className='dropdown-sorting'>
        <button className='dropbtn'>
          Dropdown
          <FiChevronDown />
        </button>
        <div className='dropdown-btn'></div>
        <div className='dropdown-content'>
          <a value='sort' onClick={sortByPrice}>
            Sort low Price
          </a>
          <a value='sort' onClick={sortByLowPrice}>
            Sort by high Price
          </a>
          <a value='sort' onClick={ascendingEvent}>
            a-z
          </a>
          <a value='sort' onClick={descendingEvent}>
            z-a
          </a>
        </div>
      </div>
    </div>
  )
}
export default Sorting
