import './footer.css'
import { Link } from 'react-router-dom'
import { footerMenuItems } from './data/contacts'
import { linkMenuItems } from './data/anchor'
import { adressInfo } from './data/adress'
const Footer = () => {
  return (
    <section className='footer__conatiner'>
      <footer className='footer'>
        {/* <div className='footer__footer-heading'> */}
        {/* <h4 className=' footer__h4 '> */}
        {/* Do you want to steretch in to the future before others */}
        {/* </h4> */}
        {/* <h6 className='footer__h6 '>Request Early Access</h6> */}
        {/* </div> */}
        <div className='anchor'>
          <h4>Links</h4>
          <div className='anchor__container'>
            {linkMenuItems.map((item, index) => {
              return (
                <ul className='footer-anchor' key={index}>
                  <Link to={item.link}>{item.icon}</Link>
                </ul>
              )
            })}
          </div>
        </div>
        <div className='services'>
          <h4>Services</h4>
          <div className='services__container'>
            {footerMenuItems.map((item, index) => {
              return (
                <ul className='footer-services' key={index}>
                  <Link to={item.link}>{item.title}</Link>
                </ul>
              )
            })}
          </div>
        </div>
        <div className='adress'>
          <h4>Adress</h4>
          <div className='adress__container'>
            {adressInfo.map((item, index) => {
              return (
                <ul className='footer-adress' key={index}>
                  <Link to={item.link}>
                    <div className='footer-adress__wrapper'>
                      {item.icon}
                      {item.description}
                    </div>
                  </Link>
                </ul>
              )
            })}
          </div>
        </div>
      </footer>
      <div className='footer-copyright'>
        <h6>Copyright &copy; 2023</h6>
      </div>
    </section>
  )
}
export default Footer
