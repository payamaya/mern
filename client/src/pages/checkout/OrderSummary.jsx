import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/CartContext'
import './checkout.css'
// import TabGroup from '../../components/button/TabButton'
import TabButton from '../../components/button/TabButton'
const OrderSummary = () => {
  const { getTotalCartAmount } = useContext(ShopContext)
  const totalAmount = getTotalCartAmount()
  const navigate = useNavigate()

  // THE CODE BELOW BELONGS TO STRIPE PAYMENT
  const checkout = async () => {
    // can be 'http://localhost:3500/checkout'
    await fetch('http://localhost:5174/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items: getTotalCartAmount.items }),
    })
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url) // fORWARDING USER TO STRIPE
        }
      })
  }
  return (
    <section className='checkout-section'>
      <h1>OrderSummary confirm</h1>
      {/* <h1>Use Split for payment</h1> */}
      <h1>Total Amount: ${totalAmount}</h1>
      {/*we pass the path route we wish to navigate to in this case we are navigating back to home('/') navigate('-1') */}
      <TabButton />
      <button className='checkout-btn' onClick={() => navigate(-1)}>
        Go back
      </button>
      <button className='checkout-btn' onClick={checkout} navigate='/success'>
        checkout
      </button>
      <Link className='cart-link' to='/split'>
        {/* same css as the cart link to write less code  */}
        Confirm
      </Link>
      {/* this can be a submit button in a Form*/}
    </section>
  )
}
export default OrderSummary
// useNavigate is used to naviagte programmatically returned function to navigate passing either a path or a number that indicates a change in the history
