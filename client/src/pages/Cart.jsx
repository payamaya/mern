import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/CartContext'
import getName from '../api/custom'
// import newApi from '../api/custom'
import CartItems from './CartItem'
import './cart.css'
const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext)
  const { getTotalCartItems } = useContext(ShopContext)
  const totalItems = getTotalCartItems()
  const totalAmount = getTotalCartAmount()
  // const [productsItems, setProducts] = useState([])
  const [items, setItems] = useState([])
  // RetrievItems

  const retrievItems = async () => {
    const response = await getName('/products')

    return response.data
  }
  useEffect(() => {
    const getAllItems = async () => {
      const allItems = await retrievItems()
      if (allItems) setItems(allItems)
    }
    getAllItems()
  }, [])

  // return products
  // const retrievProducts = async () => {
  //   const response = await newApi.get('/newApi')

  //   return response.data
  // }
  // useEffect(() => {
  //   const getAllProducts = async () => {
  //     const allProducts = await retrievProducts()
  //     if (allProducts) setProducts(allProducts)
  //   }
  //   getAllProducts()
  // }, [])
  return (
    <div className='cart'>
      <div className='cart-title'>
        <h1>Cart items</h1>
      </div>
      {/* <section className='cart-section__wrapper'> */}
        <div className='cartItems'>
          {items &&
            // productsItems &&
            items.map((product) => {
              if (cartItems[product.id] !== 0) {
                return <CartItems data={product} key={product.id} />
              }
            })}
        </div>
        {/* <div className='cartItems'>
          {productsItems &&
            items &&
            productsItems.map((product) => {
              if (cartItems[product.id] !== 0) {
                return <CartItems data={product} key={product.id} />
              }
            })}
        </div> */}
      {/* </section> */}
{/* HERE WE DISPLAY THE FINAL AMMOUNT AND QUANTITY TO CHECKOUT */}
      <div className='checkout'>
      <h1>Items</h1>
        <div className='checkout-container'>
          <p>Total Amount: ${totalAmount}</p>
          <p>
            Quantity: {totalItems}
          </p>
        </div>
        {/* display total items */}
        <br />
        <div className='checkout-box'>
          {totalAmount > 1 ? (
            <Link className='checkout__link' to='/order-summary'>
              Check Out
            </Link>
          ) : (
            ''
          )}
          {/* <Link className='cart__link' to='/products/new'> */}
          <Link className='cart__link' to='/products'>
            Back Home Cart
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Cart
