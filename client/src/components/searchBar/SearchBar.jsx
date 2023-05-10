import { useState, useEffect } from 'react'
import { BiSearch } from 'react-icons/bi'
import products from '../../api/custom'
import avatar from '../../assets/default.avatar.svg'
import { useContext } from 'react'
import { ShopContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import SingleProduct from '../../pages/product/SingleProduct'
const SearchBar = () => {
  const [items, setItems] = useState([])
  const [search, setSearch] = useState('')
  const removeItem = (id) => {
    let newItem = items.filter((item) => item.id !== id)
    setItems(newItem)
  }
  const { addToCart } = useContext(ShopContext)
  // RetrievItems
  const retrievItems = async () => {
    const response = await products.get('/products')
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

  return (
    <div className=''>
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
                  <article className='product-card__wrapper' key={id}>
                    <div className='product-card__name'>
                      <h4>{name}</h4>
                      <h4>{price}</h4>
                    </div>
                    <figure className='product-card__image'>
                      <img
                        className='product-img'
                        src={image || avatar}
                        alt={name}
                      />
                    </figure>
                    {/* describe your image
                      <figcaption></figcaption>
                      */}
                    {/* <Link className='product__link' to={`/products/${id}`}>
                          More Info
                        </Link> */}
                    <SingleProduct
                      id={id}
                      name={name}
                      price={price}
                      image={image}
                    />
                    <section className='btn-box'>
                      <div key={id} className='item'>
                        <button
                          className='product__remove'
                          onClick={() => removeItem(id)}
                        >
                          Remove Item
                        </button>
                        <button
                          className='product__add'
                          onClick={() => addToCart(id)}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </section>
                  </article>
                )
              })}
        </div>
      </div>
    </div>
  )
}
export default SearchBar
