
// import { FiChevronDown } from 'react-icons/fi'

// import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import { useContext } from 'react'
// import avatar from '../../assets/default.avatar.svg'
// import { ShopContext } from '../../context/CartContext'
// import products from '../../api/custom'

// const Sorting = () => {
//   const [items, setItems] = useState([])
//   const [search, setSearch] = useState('')

//  const removeItem = (id) => {
//    let newItem = items.filter((item) => item.id !== id)
//    setItems(newItem)
//  }
//    const { addToCart } = useContext(ShopContext)
//   // RetrievItems
//   const retrievItems = async () => {
//     const response = await products.get('/products')
//     return response.data
//   }
//   useEffect(() => {
//     retrievItems()
//   })
//   useEffect(() => {
//     const getAllItems = async () => {
//       const allItems = await retrievItems()
//       if (allItems) setItems(allItems)
//     }
//     getAllItems()
//   }, [])

//   // -------------Sorting products-----------------//
//   const ascendingEvent = () => {
//     let data = [...items]
//     if (data.length > 0) {
//       let result = data.sort((a, b) => a.name.localeCompare(b.name))
//       setItems(result)
//     }
//   }
//   const descendingEvent = () => {
//     let data = [...items]
//     if (data.length > 0) {
//       let result = data.sort((a, b) => b.name.localeCompare(a.name))
//       setItems(result)
//     }
//   }
//   const sortByPrice = () => {
//     let data = [...items]
//     if (data.length > 0) {
//       let result = data.sort((a, b) => (a.price > b.price ? 1 : -1))
//       setItems(result)
//     }
//   }
//   const sortByLowPrice = () => {
//     let data = [...items]
//     if (data.length > 0) {
//       let result = data.sort((a, b) => (b.price > a.price ? 1 : -1))
//       setItems(result)
//     }
//   }
//   // --------------RETURN-SORTED-ITEM------------//
//   return (
//     <div className=''>
//       <div>
//         {' '}
//         <div className='navbar-dropdown'>
//           <div className='dropdown-sorting'>
//             <button className='dropbtn'>
//               Dropdown
//               <FiChevronDown />
//             </button>
//             <div className='dropdown-btn'></div>
//             <div className='dropdown-content'>
//               <a value='sort' onClick={sortByPrice}>
//                 Sort low Price
//               </a>
//               <a value='sort' onClick={sortByLowPrice}>
//                 Sort by high Price
//               </a>
//               <a value='sort' onClick={ascendingEvent}>
//                 a-z
//               </a>
//               <a value='sort' onClick={descendingEvent}>
//                 z-a
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className='product-page__wrapper'>
//         {items &&
//           items
//             .filter((item) => {
//               return search.toLowerCase() === ''
//                 ? item
//                 : item.name.toLowerCase().includes(search)
//             })
//             // we use slice to display the amount item we wish to display on the screen
//             // .slice(0, 2)

//             .map((item) => {
//               // destructure product
//               const { id, name, image, price } = item
//               return (
//                 <article className='product-card__wrapper' key={id}>
//                   <div className='product-card__name'>
//                     <h4>{name}</h4>
//                     <h4>{price}</h4>
//                   </div>

//                   <figure className='product-card__image'>
//                     <img
//                       className='product-img'
//                       src={image || avatar}
//                       alt={name}
//                     />
//                   </figure>
//                   {/* describe your image 
//                     <figcaption></figcaption>
//                     */}
//                   <Link className='product__link' to={`/products/${id}`}>
//                     More Info
//                   </Link>
//                   <section className='btn-box'>
//                     <div key={id} className='item'>
//                       <button
//                         className='product__remove'
//                         onClick={() => removeItem(id)}
//                       >
//                         Remove Item
//                       </button>
//                       <button
//                         className='product__add'
//                         onClick={() => addToCart(id)}
//                       >
//                         Add to Cart
//                       </button>
//                     </div>
//                   </section>
//                 </article>
//               )
//             })}
//       </div>
//     </div>
//   )
// }
// export default Sorting
