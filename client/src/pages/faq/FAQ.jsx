import './faq.css'
import { useEffect } from 'react'
const FAQ = () => {
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

  //  const hiddenElements = document.querySelectorAll('.hidden')
  //  hiddenElements.forEach((element) => observer.observe(element))
  return (
    <section className='fqa__wrapper'>
      <div className='faq-header'>
        <div className='faq-header__para'>
          <h1>Shopify FAQ </h1>
          <p>
            If you’re new to Shopify or looking to replatform your business,
            this guide will help you learn more about the platform and its
            features. Already have a Shopify store? Get detailed product
            information in our
          </p>{' '}
          <a href='#'>Help Center</a>
        </div>
        <div className='faq-header-img'>
          <img className='faq__img hidden'
            src='https://cdn.shopify.com/shopifycloud/brochure/assets/seo/faq/faq-hero@mobile-2x-4b621d3a018f6f1235cb70d2f8f657893e5cf663052ef3e3c53e24eb46d95257.png'
            alt=''
          />
        </div>
      </div>
      <div className='faq-conatiner'>
        <h1 className='faq-main__head'>Getting started with Shopify</h1>
        <div className="faq-main__wrapper">
            <div className='faq-main__sidebar'>
              <ul className='faq-main__list'>
                <li>Getting started with Shopify</li>
                <li>Selling on Shopify </li>
                <li>Payments on Shopify</li>
                <li>Shipping with Shopify</li>
              </ul>
            </div>
          <div className='faq-main'>
            <div className='faq-main-para'>
              <article className='faq-main__article'>
                <h3>What is Shopify and how does it work?</h3>
                <p>
                  Shopify is a complete commerce platform that lets you start,
                  grow, and manage a business. Create and customize an online
                  store Sell in multiple places, including web, mobile, social
                  media, online marketplaces, brick-and-mortar locations, and
                  pop-up shops{' '}
                  <a href=''>
                    Manage products, inventory, payments, and shipping
                  </a>{' '}
                  Shopify is completely cloud-based and hosted, which means you
                  don’t have to worry about upgrading or maintaining software or
                  web servers. This gives you the flexibility to access and run
                  your business from anywhere with an internet connection.
                </p>
              </article>
              <article className='faq-main__article'>
                <h3>What is Shopify and how does it work?</h3>
                <p>
                  Shopify is a complete commerce platform that lets you start,
                  grow, and manage a business. Create and customize an online
                  store Sell in multiple places, including web, mobile, social
                  media, online marketplaces, brick-and-mortar locations, and
                  pop-up shops{' '}
                  <a href=''>
                    Manage products, inventory, payments, and shipping
                  </a>{' '}
                  Shopify is completely cloud-based and hosted, which means you
                  don’t have to worry about upgrading or maintaining software or
                  web servers. This gives you the flexibility to access and run
                  your business from anywhere with an internet connection.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default FAQ
