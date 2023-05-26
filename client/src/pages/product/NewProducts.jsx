import { useContext } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import './product.css'
import { ShopContext } from '../../context/CartContext'
import getName from '../../api/api'
import { useState, useEffect } from 'react'
import Buttons from '../../components/button/Buttons'
import { GoInfo } from 'react-icons/go'
import avatar from '../../assets/avatar.svg'

const NewProducts = () => {
  const [items, setItems] = useState([])
  const [search, setSearch] = useState('')
  const { addToCart } = useContext(ShopContext)

  const [modal, setmodal] = useState(false)
  const toggleModal = () => {
    setmodal(!modal)
  }
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
  const { productId } = useParams()
  const product = items.find((product) => product?.id === productId)
  return (
    <section>
      <div className='product-section__header'>
        <h1 className='home-para'>New Products</h1>
      </div>
      <div className='single-oult'>
        {/* outlet display MORE INFO */}
        <Outlet />
      </div>
      <div className='product__wrapper'>
        {items &&
          items
            // .filter((item) => {
            //   return search.toLowerCase() === ''
            //     ? item
            //     : item.name.toLowerCase().includes(search)
            // })

            .map((item) => {
              // Destructure
              const { id, name, image, price } = item
              return (
                <div className='modal__container' key={id}>
                  <div key={product?.id}>
                    {modal && (
                      <div className='modal'>
                        <div onClick={toggleModal} className='overlay'>
                          <div className='modal-content'>
                            <button
                              className='close-modal'
                              onClick={toggleModal}
                            >
                              &times;
                            </button>
                            <section className='cartItem-card'>
                              <div className='cartItem'>
                                <img src={image || avatar} alt={name} className='skeleton'/>
                                <div className='description-items__container'>
                                  <div className='description'>
                                    <p>Name: {name}</p>
                                    <p className='product__price'>
                                      Price: ${price}
                                    </p>
                                    {/* <p>{id}</p> */}

                                    <Link
                                      className='single-product__link'
                                      to='/products'
                                    >
                                      Back product
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </section>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <ul className='product__ul '>
                    <figure className='product-card__image skeleton'>
                      <img src={image || avatar} alt={name} />
                    </figure>
                    <div className='product__price-container'>
                      <p className='product__name'>{name}</p>
                      <GoInfo
                        onClick={toggleModal}
                        className='btn-modal__info'
                        to={`products/${id}`}
                      />
                    </div>
                    <p className='product__price'>{price}</p>
                    <div className='products__btn-wrapper'>
                      {/* <Buttons
                        variant='secondary'
                        onClick={toggleModal}
                        className='btn-modal'
                        to={`products/${id}`}
                      >
                      </Buttons> */}

                      <Buttons
                        variant='secondary'
                        className='product__add'
                        onClick={() => addToCart(id)}
                      >
                        Add to Cart
                      </Buttons>
                    </div>
                  </ul>
                </div>
              )
            })}
      </div>
    </section>
  )
}
export default NewProducts
