import { Link, Outlet, useParams } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import './product.css'
import { ShopContext } from '../../context/CartContext'
import getName from '../../api/api'
import avatar from '../../assets/avatar.svg'
import { FiChevronDown } from 'react-icons/fi'
// import SingleProduct from './SingleProduct'
import { GoInfo } from 'react-icons/go'
// import SelectImage from '../../components/selctImage/SelectImage'
import Buttons from '../../components/button/Buttons'
// import TabButton from '../../components/button/TabButton'
// the Outlet component needs to know what to do with these child components in the routes tree,
// For that React provides an Oultlet component

const Products = () => {
  const [items, setItems] = useState([])
  const [search, setSearch] = useState('')
  const [modal, setmodal] = useState(false)
  const toggleModal = () => {
    setmodal(!modal)
  }
  // const removeItem = (id) => {
  //   let newItem = items.filter((item) => item.id !== id)
  //   setItems(newItem)
  // }
  const { addToCart } = useContext(ShopContext)
  // RetrievItems
  const retrievItems = async () => {
    const response = await getName('/products')
    return response.data
  }
  useEffect(() => {
    retrievItems()
  })
  useEffect(() => {
    const getAllItems = async () => {
      const allItems = await retrievItems()
      if (allItems) setItems(allItems)
    }
    getAllItems()
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault()
    //  you can add some functionality
    return
  }
  const ascendingEvent = () => {
    let data = [...items]
    if (data.length > 0) {
      let result = data.sort((a, b) => a.name.localeCompare(b.name))
      setItems(result)
    }
    console.log('from A - Z ')
  }
  const descendingEvent = () => {
    let data = [...items]
    if (data.length > 0) {
      let result = data.sort((a, b) => b.name.localeCompare(a.name))
      setItems(result)
    }
    console.log(`from Z - A`)
  }
  const sortByHighPrice = () => {
    let data = [...items]
    if (data.length > 0) {
      let result = data.sort((a, b) => (a.price > b.price ? 1 : -1))
      setItems(result)
    }
    console.log('High price')
  }
  const sortByLowPrice = () => {
    let data = [...items]
    if (data.length > 0) {
      let result = data.sort((a, b) => (b.price > a.price ? 1 : -1))
      setItems(result)
    }
    console.log('low price')
  }
    const { productId } = useParams()
    const product = items.find((product) => product?.id === productId)
  return (
    <>
      {/* <h2>It is {new Date().toLocaleTimeString()}.</h2> */}

      <div className='product-container'>
        <section className='product__section'>
          <div className='product-head__container'>
            <h2 className='product-container__header'>Products Page</h2>
            {/* search bar */}
            <form className='search' onSubmit={handleSubmit}>
              <label htmlFor='search' />
              <input
                type='search'
                className='search__input'
                placeholder='search products'
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />

              <button type='submit' className='search__btn'>
                <i>
                  <BiSearch />
                </i>
              </button>
            </form>
          </div>
          {/* <select name='sort' id='' onChange={sortId}> */}

          {/* </select> */}
          <div className='dropdown-container__sort'>
            <div className='navbar-dropdown'>
              <div className='dropdown-sorting'>
                <button className='dropbtn'>
                  Sorting List
                  <FiChevronDown />
                </button>
                {/* <div className='dropdown-btn'></div> */}
                <div className='dropdown-content'>
                  <Link value='sort' onClick={sortByHighPrice}>
                    Sort low Price
                  </Link>
                  <Link value='sort' onClick={sortByLowPrice}>
                    Sort by high Price
                  </Link>
                  <Link value='sort' onClick={ascendingEvent}>
                    a-z
                  </Link>
                  <Link value='sort' onClick={descendingEvent}>
                    z-a
                  </Link>
                </div>
              </div>
            </div>
            <div className='secondary-nav'>
              <nav className='nav-link'>
                {/* the link route must be fixed */}
                <Link to='/products'>Featured</Link>
                <Link to='new'>New</Link>
              </nav>
            </div>
          </div>
          {/* outlet displays here can be anywhere else as well in this case is the */}

          <Outlet /> 
          <div className=''>
            <div className='product-page__wrapper'>
              {items &&
                items
                  .filter((item) => {
                    return search.toLowerCase() === ''
                      ? item
                      : item.name.toLowerCase().includes(search)
                  })
                  // we use slice to display the amount item we wish to display on the screen
                  // .slice(0, 2)
                  .map((item) => {
                    // destructure product
                    const { id, name, image, price } = item
                    return (
                      <div className='grid' key={id}>
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
                                      <img
                                        src={image || avatar}
                                        alt={name}
                                        className='skeleton'
                                      />
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
            {/* <SelectImage /> */}
            {/*    onUploadprogress: progressEvent =>{
                  console.log('Upload progress' + Math.round(progressEvent.loaded/ progressEvent.total *100) +' % ')
                } */}
            {/* this button remove all items
             <button className='product-btn__remove' onClick={() => setItems([])}>
             Clear All
            </button> */}
          </div>
        </section>
      </div>

      {/* outlet component render the component corresponding to matching child route from the parent list of route in this case the Products Route*/}

      {/* By using th Outlet component the child component will automatically have the parent path as a prefix 
      So the new route will be come products/featured & products/new
      */}
    </>
  )
}
export default Products

// A relative links or relative path does not start with /featured or /new and will inherit the colsest route in which they are rendered
// very useful when you have to link deeply in nested pods
