import React from 'react'
import styled from 'styled-components'

// styled component
// defined outside of our functional expression
const NavBar = styled.nav`
  background-color: lightgray;
  height: 60px;
  text-align: center;
`

// Functional Expression
// We always want to wrap our JSX statement in 'adams alligators' or fragments
const Header = (props) => {
  return(
    <>
      <NavBar>
        { props.info }
      </NavBar>
    </>
  )
}

export default Header