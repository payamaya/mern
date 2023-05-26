import { lazy } from 'react'
import About from './about/About'
import Admin from '../pages/Admin'
import SingleProduct from '../pages/product/SingleProduct'
// import Products from '../pages/product/Products'
import NewProducts from '../pages/product/NewProducts'
import Home from './home/index'
import NoMatch from './nomatch/NoMatch'
import OrderSummary from './checkout/OrderSummary'
import Users from './Users'
import UserDetails from './UserDetails'
import SharedLayout from './SharedLayout'
import Featured from './featured/Featured'
import FAQ from './faq/FAQ'
import Contact from './Contact'
import SignUp from './SignUp'
import Cart from './Cart'
import Chat from '../components/Chat'
import Checkout from './checkout/Checkout'
import PrivacyPolicy from './privacy/PrivacyPolicy'

import NewProductsItems from './product/NewProductItems'
const LazyAbout = lazy(() => import('./about/About'))
const LazyProducts = lazy(() => import('../pages/product/Products'))
export {
  About,
  Admin,
  SingleProduct,
  Home,
  NewProducts,
  NoMatch,
  OrderSummary,
  LazyProducts,
  Users,
  UserDetails,
  SharedLayout,
  Featured,
  FAQ,
  Contact,
  LazyAbout,
  SignUp,
  Cart,
  NewProductsItems,
  Chat,
  Checkout,
  PrivacyPolicy

}
