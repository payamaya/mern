import React, { useContext } from 'react'

import avatar from '../assets/avatar.svg'
import { ShopContext } from '../context/CartContext'

const CartItem = (props) => {
  const { id, image, name, price } = props.data
  const {cartItems, addToCart, removeFromCart} = useContext(ShopContext)

  return (
    <>
      <div className='cartItem' key={id}>
        <figure>
          <img className='cart-img skeleton' src={image || avatar} alt={name} />
        </figure>
        <div className='description'>
          <header className='cart-description'>
            <h3>{name}</h3>
            <p>Price: ${price}</p>
          </header>
          <div className='cart-btn__container'>
            <button className='cart-btn1' onClick={() => removeFromCart(id)}>
              -
            </button>
            {/* <input
              className='cart-btn'
              type='text'
              value={cartItems[id]}
              onChange={(e) => updateCartItemAmount(Number(e.target.value), id)}
            /> */}
            <button className='cart-btn2' onClick={() => addToCart(id)}>
              +
            </button>
          </div>
          <footer className='cart-header__title'>
            Quantity: {cartItems[id]}
          </footer>
        </div>
      </div>
    </>
  )
}
export default CartItem
