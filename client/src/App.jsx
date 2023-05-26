import React from 'react'
import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import {
  Admin,
  Home,
  NoMatch,
  NewProducts,
  UserDetails,
  Users,
  OrderSummary,
  SingleProduct,
  SharedLayout,
  Featured,
  FAQ,
  Contact,
  // About this is a lazy route
  LazyAbout,
  LazyProducts,
  SignUp,
  Cart,
  NewProductsItems,
  // Chat,
  Checkout,
  PrivacyPolicy
} from './pages/index'
import Navbar from './layouts/navbar/Navbar'
import Footer from './layouts/footer/Footer'

// RequireAuth route is to protect the profile route
// import Profile from './pages/Profile'
// import Login from './router/Login'
// // RequireAuth route is to protect the profile route
// import RequireAuth from './router/RequireAuth'
import { Login, Profile, RequireAuth, Register } from './router'

//This route is to protect the entire App
import { AuthProvider } from './components/utils/auth'
import { ShopContextProvider } from './context/CartContext'
import { SortContextProvider } from './context/SortingContext'
import CookieConsent from 'react-cookie-consent'

// import About from './components/About'
// Dynamic lazy component and must be place down otherwise react will complain
// A promise is returned by this dynamic import which is then converted into a module that contains a default exported react component which is About component in this senario

function App() {
  return (
    <ShopContextProvider>
      <SortContextProvider>
        <AuthProvider>
          {/* <Header></Header> */}
          <Navbar />
          <Routes>
            <Route path='/' element={<SharedLayout />} />
            {/* This is absolute route */}
            <Route index element={<Home />} />
            {/* we include the React lazy component as part of the route configuration*/}
            {/* React lazy is a funtion that takes another function as an argument, this argument calls a dynamic import */}
            <Route
              path='about'
              element={
                // fallback prop can be any react element
                // we haven't reduced the overall amount of code in our app
                //we've reduced the amount code needed during te intial load
                //lazy component is a common scenario when building a analytics app where the data visualization libraries are huge and affect performance, few users might not even be interested in the charts, which you can lazy load such routes
                <React.Suspense
                  fallback={
                    <div className='center'>
                      <div className='ring'></div>
                      <span className='loading'>Loading.......</span>
                    </div>
                  }
                >
                  <LazyAbout />
                </React.Suspense>
              }
            />
            {/* <Route path='about' element={<About />} /> */}
            <Route path='order-summary' element={<OrderSummary />} />
            {/* Nested Route React router will automatically forms the full path to the children routes*/}
            <Route
              path='products'
              element={
                <React.Suspense
                  fallback={
                    <div className='center'>
                      <div className='ring'></div>
                      <span className='loading'>Loading.......</span>
                    </div>
                  }
                >
                  <LazyProducts />
                </React.Suspense>
              }
            >
              {/*when you want a route to be render at the parent URL make use of index route.
           the path will be the same as the parent route path*/}
              {/* <Route index element={<Products />} /> */}
              <Route path=':productId' element={<SingleProduct />} />
              <Route index element={<Featured />} />
              <Route path='new' element={<NewProducts />}>
                {' '}
                <Route path=':newId' element={<NewProductsItems />} />
              </Route>
            </Route>
            {/* Dynamic Route Segments, This user id param will match any value as long as the pattern is the same*/}
            {/* So when you want to work with list and details, dynamic routes are what we need.
        userId can be any string and not just a number
        Dynamic Route can be Nested as well 
        the Two routes has users as a prefix
        the child component will be render within the parent component
        */}
            <Route path='users' element={<Users />}>
              {/* :userId is a varibale can be any name, this variable is going to take the value from the parameter*/}
              <Route path=':userId' element={<UserDetails />} />
              {/* React will match first the route that is more specific */}
              <Route path='admin' element={<Admin />} />
            </Route>
            {/* Protected Route */}
            <Route
              path='profile'
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<SignUp />} />
            <Route path='register' element={<Register />} />
            <Route path='auth/login' element={<Login />} />
            <Route path='faq' element={<FAQ />} />
            <Route path='cart' element={<Cart />} />
            <Route path='contact' element={<Contact />} />
            <Route path='checkout' element={<Checkout />} />
            <Route path='/privacy' element={<PrivacyPolicy />} />
            {/* this route will match only when no other routes do, can display a content on the page by making this route <Route>Here you can display any element you wish, or you can make a new page just for Nomatch route</Route>*/}
            <Route path='*' element={<NoMatch />} />
          </Routes>
          {/* <Chat /> */}
          <Footer />
          <CookieConsent
            debug={true}
            // location='top' display where the cookies will appear
            style={{
              background: 'var(--DARK-COLOR)',
              color: 'var(--LIGHT-COLOR)',
              fontSize: '1.8rem',
              textAlign: 'left',
            }}
            buttonStyle={{
              background: 'var(--LIGHT-COLOR)',
              color: 'var(--DARK-MODE)',
              borderRadius: '5px',
              fontSize: '1.5rem',
              padding: '1.5rem',
            }}
            buttonText='Accept All'
            expires={1} // expires per day
          >
            <div className='cookies__container'>
              <h1>This website uses cookies</h1>
              <p className='cookies-para'>
                We use cookies to improve user experience. Choose what cookies
                you allow us to use. You can read more about our Cookie Policy
                in our{' '}
                <a href='/privacy' className='privacy-link'>
                  Privacy policy
                </a>
              </p>
            </div>
            {/* <button
              style={{
                float: 'right',
                background: 'var(--LIGHT-COLOR)',
                color: 'var(--DARK-MODE)',
                borderRadius: '5px',
                fontSize: '1.5rem',
                padding: '1.5rem',
                marginTop: '0',
              }}
              onClick={() => {
                alert('yay')
              }}
            >
              Reject All
            </button> */}
          </CookieConsent>
          {/*the footer component goes her <Footer></Footer> */}
        </AuthProvider>
      </SortContextProvider>
    </ShopContextProvider>
  )
}

export default App
