import { AiOutlineShoppingCart } from 'react-icons/ai'

import { ShopContext } from '../../context/CartContext'

import { useContext } from 'react'
import './product.css'

const Quantity = () => {
  const { getTotalCartItems } = useContext(ShopContext)
  const totalItems = getTotalCartItems()
  return (
    <div className='cart__icon'>
      <div className='cart-icon__wrapper'>{totalItems}</div>
      <div className="icon">
        <AiOutlineShoppingCart />
      </div>
    </div>
  )
}
export default Quantity
