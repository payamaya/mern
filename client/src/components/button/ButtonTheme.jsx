import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useState } from 'react'
function clickMe() {
  alert('button clicked')
}

const theme = {
  blue: {
    default: ' #3f51b5',
    hover: '#283593',
  },
  pink: {
    default: ' #e91e63',
    hover: '#ad1457',
  },
}

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  padding: 5px 15px;
  margin: 10px 0px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: var(--SHADOWS);
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`

Button.defaultProps = {
  theme: 'blue',
}
// Toggle button
const ButtonToggle = styled(Button)`
  opacity: 0.7;
  ${({ active }) => active && `opacity: 1;`}
`

const types = ['Cash', 'Credit Card', 'Bitcoin']
function ToggleGroupButton() {
  const [active, setActive] = useState(types[0])
  return (
    <div>
      {types.map((type) => {
        return (
          <ButtonToggle
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
            {type}
          </ButtonToggle>
        )
      })}
    </div>
  )
}

// Tab buttons
const Tab = styled.button`
  padding: 10px 60px;
  cursor: pointer;
  opacity: 0.6;
  background-color: transparent;
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&
    `border-bottom: 2px solid black;
  opacity:1;`}
`
function TabGroup() {
  const [active, setActive] = useState(types[0])
  return (
    <>
      <div className=''>
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

      <p>Your payment selection: {active}</p>
    </>
  )
}
const ButtonTheme = () => {
  return (
    <div className=''>
      <h1>Button Theme component</h1>
      <div>
        <Button theme='pink' onClick={clickMe}>
          pink
        </Button>
        <Button disabled onClick={clickMe}>
          diabled
        </Button>
        <Button onClick={clickMe}>default</Button>
      </div>
      <Link to={'https://react.school'} target='_blank'>
        <Button onClick={clickMe}>Link</Button>
      </Link>
      {/* render- the TOGGLE function  */}
      <ToggleGroupButton />
      {/* render- the TAB function  */}
      <TabGroup />
    </div>
  )
}
export default ButtonTheme
