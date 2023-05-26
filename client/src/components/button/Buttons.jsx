import React from 'react'
import styled from 'styled-components'

const ButtonComponent = styled.button`
  position: relative;
  display: flex;
  align-content: center;
  justify-content: center;
  text-align: center;
  text-decoration: non;
  vertical-align: middle;
  cursor: pointer;
  flex-wrap: wrap;
  user-select: none;
  border-radius: 0.3rem;
  transition; ease background-color 250ms;
  padding: 10px;
    ${(props) =>
      props.size === 'sm'
        ? '1.1rem'
        : props.size === 'md'
        ? '1.4rem'
        : props.size === 'lg'
        ? '1.6rem'
        : '1.1rem'};
  height: ${(props) =>
    props.size === 'sm'
      ? '34px'
      : props.size == 'md'
      ? '37px'
      : props.size === 'lg'
      ? '40px'
      : '34px'};
  font-family: 'Cormorant Upright', sans-serif;
  font-weight: 500;
  border: 1px solid transparent;
  background-color: ${(props) =>
    props.variant === 'light'
      ? '#f8f9fa'
      : props.variant === 'dark'
      ? '#212529'
      : props.variant === 'primary'
      ? '#0d6efd'
      : props.variant === 'secondary'
      ? '#6c757d'
      : props.variant === 'success'
      ? '#198754'
      : props.variant === 'info'
      ? '#0dcaf0'
      : props.variant === 'warning'
      ? '#ffc107'
      : props.variant === 'danger'
      ? '#dc3545'
      : '#f8f9fa'};
      color: ${(props) =>
        props.variant === 'light'
          ? '#212529'
          : props.variant === 'dark'
          ? '#fff'
          : props.variant === 'primary'
          ? '#fff'
          : props.variant === 'secondary'
          ? '#fff'
          : props.variant === 'success'
          ? '#fff'
          : props.variant === 'info'
          ? '#fff'
          : props.variant === 'warning'
          ? '#fff'
          : props.variant === 'danger'
          ? '#fff'
          : '#f8f9fa'};
          &:hover{
            background-color:${(props) =>
              props.variant === 'light'
                ? '#f8f9'
                : props.variant === 'dark'
                ? '#878787'
                : props.variant === 'primary'
                ? '#0d6e'
                : props.variant === 'secondary'
                ? '#4b4b4b'
                : props.variant === 'success'
                ? '#dc35'
                : props.variant === 'info'
                ? '#dc3545'
                : props.variant === 'warning'
                ? '#ffc1'
                : props.variant === 'danger'
                ? '#0d6efd'
                : '#f8f9fa'};
   
      }
`

const Buttons = ({ type, variant, className, id, size, onClick, children }) => {
  return (
    <ButtonComponent
      type={type ? type : 'button'}
      variant={variant}
      className={className ? `btn-component ${className}` : 'btn-component'}
      id={id}
      onClick={onClick}
      size={size}
    >
      {children}
    </ButtonComponent>
  )
}
export default Buttons
// can change the color on hover if you wish to
// &:hover{
//    color:${(props) =>
//      props.variant === 'light'
//        ? '#5e35b1'
//        : props.variant === 'dark'
//        ? '#004d40'
//        : props.variant === 'primary'
//        ? '#000000'
//        : props.variant === 'secondary'
//        ? '#f9a825'
//        : props.variant === 'success'
//        ? '#00ee'
//        : props.variant === 'info'
//        ? '#15feac'
//        : props.variant === 'warning'
//        ? '#b71c1c'
//        : props.variant === 'danger'
//        ? '#ffffff'
//        : '#f8f9fa'};
//   }
