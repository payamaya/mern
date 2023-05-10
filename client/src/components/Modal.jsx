// import { useState } from 'react'
// import SingleProduct from '../pages/product/SingleProduct'
// import { Link, useParams } from 'react-router-dom'
// import avatar from '../assets/default.avatar.svg'
// import './modal.css'
// const Modal = ({ id, name, price, image }) => {
//   // toggle back and forth
//   const [modal, setmodal] = useState(false)
//   const toggleModal = () => {
//     setmodal(!modal)
//   }
//   return (
//     <div>
//       <button
//         onClick={toggleModal}
//         className='btn-modal'
//         to={`/products/${id}`}
//       >
//         More Info
//       </button>
//       {modal && (
//         <div className='modal'>
//           <div onClick={toggleModal} className='overlay'>
//             <button onClick={toggleModal}>&times;</button>
//             <div className='modal-content'>
//               <div>
//                 <button
//                   onClick={toggleModal}
//                   className='btn-modal'
//                   to={`/products/${id}`}
//                 >
//                   More Info
//                 </button>
//                 {modal && (
//                   <div className='modal'>
//                     <div onClick={toggleModal} className='overlay'>
//                       <div className='modal-content'>
//                         {/* <button className='close-modal' onClick={toggleModal}>
//                 &times;
//               </button> */}
//                         <section className='cartItem-card' key={id}>
//                           <div className='cartItem'>
//                             <img src={image || avatar} alt={name} />
//                             <div className='description-items__container'>
//                               <div className='description'>
//                                 <p>Name: {name}</p>
//                                 <p>Price: ${price}</p>

//                                 <Link
//                                   className='single-product__link'
//                                   to='/products'
//                                 >
//                                   Back product
//                                 </Link>
//                               </div>
//                             </div>
//                           </div>
//                         </section>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }
// export default Modal
