import { createContext, useState } from 'react'
import products  from '../data'
// import { getName as products } from '../api/api'
export const ShopContext = createContext(null)

const getDefaultCart = () => {
  let cart = {}
  for (let i = 1; i < products.length + 1; i++ ) {
    cart[i] = 0
  }
  return cart
}

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart())

  const getTotalCartAmount = () => {
    let totalAmount = 0
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find((product) => product.id === item)
        totalAmount += cartItems[item] * itemInfo.price
      }
    }
    return totalAmount
  }
  const getTotalCartItems = () => {
    let totalItems = null
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item]
      }
    }
    return totalItems
  }

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
       console.log('add to cart clicked')
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }))
  }

  const checkout = () => {
    setCartItems(getDefaultCart())
  }

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
    getTotalCartItems,
  }

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}
