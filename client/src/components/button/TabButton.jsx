import styled from 'styled-components'
import { useState } from 'react'
// Tab buttons
const Tab = styled.button`
  padding: 10px 60px;
  cursor: pointer;
  opacity: 0.6;
  background-color: transparent;
  gap: 1rem;
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&
    `border-bottom: 2px solid black;
  opacity:1;`}
`
const types = ['Cash', 'Credit Card', 'Bitcoin']
function TabButton() {
  const [active, setActive] = useState(types[0])
  return (
    <>
      <div className='tab__wrapper'>
        {types.map((type) => {
          return (
            <Tab
              key={type}
              active={active === type}
              onClick={() => setActive(type)}
            >
              {type}
            </Tab>
          )
        })}
      </div>

      <p className='tab-para'>Your payment selection: {active}</p>
    </>
  )
}

export default TabButton;
