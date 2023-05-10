import { Outlet } from 'react-router-dom'
import Navbar from '../layouts/navbar/Navbar'
import  Footer  from '../layouts/footer/Footer'
const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
      {/* the footer goes her since we want to see the footer everywhere */}
    </>
  )
}
export default SharedLayout
