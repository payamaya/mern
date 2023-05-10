import { Link, useParams } from 'react-router-dom'
import avatar from '../../assets/avatar.svg'
import { useState, useEffect } from 'react'
import products from '../../api/custom'
import '../../components/modal.css'
import Buttons from '../../components/button/Buttons'

const SingleProduct = ({ id, price, image, name }) => {
  // toggle back and forth
  const [modal, setmodal] = useState(false)
  const toggleModal = () => {
    setmodal(!modal)
  }
  const [items, setItems] = useState([])
  // RetrievItems
  const retrievItems = async () => {
    const response = await products.get('/products')
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
  // to display MORE INFO by id
  // we took away the produc?.name product?.price etc... so we can pop up the info
  const product = items.find((product) => product?.id === productId)

  return (
    <div key={product?.id}>
      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'>
            <div className='modal-content'>
              <button className='close-modal' onClick={toggleModal}>
                &times;
              </button>
              <section className='cartItem-card'>
                <div className='cartItem'>
                  <img src={image || avatar} alt={name} />
                  <div className='description-items__container'>
                    <div className='description'>
                      <p>Name: {name}</p>
                      <p className='product__price'>Price: ${price}</p>
                      <p>{id}</p>

                      <Link className='single-product__link' to='/products'>
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
  )
}
export default SingleProduct
