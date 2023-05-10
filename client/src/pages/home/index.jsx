import './home.css'
import { useEffect } from 'react'
import Buttons from '../../components/button/Buttons'
import cameraman from '../../assets/camerman.svg'
import cameraman4 from '../../assets/cameraman4.png'
import DarkMode from '../../components/darkMode/DarkMode'
import { useNavigate } from 'react-router-dom'
// import logo from '../../assets/logo.png'
// import bulbon from '../../assets/bulbon.png'
// import react from '../../assets/react.svg'
// import negativefilm from '../../assets/negativefilm.jpg'
const Home = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-icon')
        } else {
          entry.target.classList.remove('slide-icon')
        }
      })
    })
    const hiddenElements = document.querySelectorAll('.hidden')
    hiddenElements.forEach((element) => observer.observe(element))
  }, [])

  const hiddenElements = document.querySelectorAll('.hidden')
  hiddenElements.forEach((element) => observer.observe(element))
  return (
    <div className='main-container'>
      {/* <div className='image-wrapper'>
        <div className='logo hidden'>
          <img src={bulbon} alt='' />
        </div>
        <div className='logo hidden'>
          <img src={logo} alt='' />
        </div>
        <div className='logo hidden'>
          <img src={react} alt='' />
        </div>
        <div className='logo hidden'>
          <img src={negativefilm} alt='' />
        </div>
      </div> */}
      <div className='home__dark-mode'>
        <DarkMode />
      </div>
      <div className='home-main__container '>
        <div className='home-header'>
          <h1 className='home-header-head'>
            Let's <span className='home-span'> Light</span> together
          </h1>
        </div>
        <div className='home-content grid-col-span-2 '>
          <p className='home-para'>
            Seahorse films was established in 1998 and its the largest
            production and rental house in Cyprus. We produce or service TV
            Commercials, Feature-length Films, Music Videos, TV Shows and
            Documentaries for local and international companies. At Seahorse
            films we support our clients with the latest high-end, reliable
            equipment from our Studio. Our fixers, location managers and line
            producers have worked with several foreign and local crews, offering
            them an extensive experience to deal with all kinds of productions.
            Our clients include Oto Films Poland, Cineteve France, Films Du
            Carre Belgium, RSA UK, BBC, The Discovery Channel (EU), Sci-Fi
            Channel (US), RTL (DE), NHK (JP) Thomas Cook UK, the British Armed
            Forces and many more small and large companies.
          </p>
          <Buttons variant='dark' size='xl' onClick={() => navigate('/login')}>
            Learn More
          </Buttons>
        </div>
        <div className='home-image'>
          <figure className='image-btn__wrapper'>
            <img src={cameraman} alt={cameraman} className='cameraman' />
          </figure>
        </div>
      </div>
      <div className='home-main__container '>
        <div className='home-header'>
          <h1 className='home-header-head'>
            Let's <span className='home-span'> Light</span> together
          </h1>
        </div>
        <div className='home-content grid-col-span-2'>
          <p className='home-para'>
            Seahorse films was established in 1998 and its the largest
            production and rental house in Cyprus. We produce or service TV
            Commercials, Feature-length Films, Music Videos, TV Shows and
            Documentaries for local and international companies. At Seahorse
            films we support our clients with the latest high-end, reliable
            equipment from our Studio. Our fixers, location managers and line
            producers have worked with several foreign and local crews, offering
            them an extensive experience to deal with all kinds of productions.
            Our clients include Oto Films Poland, Cineteve France, Films Du
            Carre Belgium, RSA UK, BBC, The Discovery Channel (EU), Sci-Fi
            Channel (US), RTL (DE), NHK (JP) Thomas Cook UK, the British Armed
            Forces and many more small and large companies.
          </p>
          <Buttons variant='dark' size='xl'>
            Learn More
          </Buttons>
        </div>
        <div className='home-image'>
          <figure className='image-btn__wrapper'>
            <img
              src={cameraman4}
              alt={cameraman4}
              className='filmperson hidden'
            />
          </figure>
        </div>
      </div>
    </div>
  )
}
export default Home

// import Images from '../../images.json'
// const Home = () => {
// return (
// <div className='home-wrapper'>
{
  /* {/* <div className='sideBar-container'> */
}
{
  /* {/* {/* <aside className='sidebar-left'>left</aside> */
}
{
  /* {/* {/* <aside className='sidebar-right'>right</aside> */
}
{
  /* </div> */
}
{
  /* {/* {/* <main className='main-container'>main</main> */
}
{
  /* </div> */
}
// )
// }
// export default Home
//
{
  /* <div 
className='slider__image-carousel'> */
}
{
  /* <div 
className='slider__image-container'> */
}
{
  /* <div className='slider-frame'> */
}
{
  /* <!-- Looping throw images 
image-Folder --> */
}
{
  /* <div className='slide-images' 
id='home'> */
}
{
  /* {Images && 
         Images.map((item, index) => {
          // return (
            // <div key={index} 
className='img-container'>
            <img src={item.carouselImg} /> 
            </div> 
          // )
        // })}
      {/* </div> */
}
{
  /* </div> */
}
{
  /* </div> */
}
{
  /* </div> */
}
