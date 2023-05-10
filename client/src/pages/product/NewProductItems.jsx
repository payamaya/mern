import { Link, useParams } from 'react-router-dom'
// import avatar from '../../assets/default.avatar.svg'
import { useState, useEffect } from 'react'
import getName from '../../api/custom'
const NewProductsItems = () => {
  const [items, setItems] = useState([])
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
  // fix the itemsId from app js
  const { newId } = useParams()
  const product = items.find((product) => product?.id === newId)
  // You can have this extra line to be more specific
  // if(product ==undefined){
  //   console.log('Product data does not exist for Id' + id);
  // }
  return (
    <section className='newproduct-cartItem__container' key={product?.id}>
      <div className='newproduct-cartItem'>
        {/* <img src={product?.image || avatar} alt={product?.name} /> */}
        <div className='description-items__container'>
          <h1>{product?.name}</h1>
          <div className='description'>
            {/* <p className='newproduct__price'>Price: ${product?.price}</p> */}
            <h3>{product?.des}</h3>
          </div>
          <Link className='product__link' to='/products/new'>
            Back to product
          </Link>
        </div>
      </div>
    </section>
  )
}
export default NewProductsItems
