// import React from "react"
// const Dropdowns = ({ trigger, menu }) => {
//   const [open, setOpen] = React.useState(false)

//   const handleOpen = () => {
//     setOpen(!open)
//   }

//   return (
//     <div className='dropdown__list'>
//       {React.cloneElement(trigger, {
//         onMouseEnter: handleOpen,
//       })}
//       {open ? (
//         <ul className='menu'>
//           {menu.map((menuItem, index) => (
//             <li key={index} className='menu-item'>
//               {React.cloneElement(menuItem, {
//                 onMouseEnter: () => {
//                   menuItem.props.onMouseEnter()
//                   setOpen(false)
//                 },
//               })}
//             </li>
//           ))}
//         </ul>
//       ) : null}
//     </div>
//   )
// }
// export default Dropdowns
