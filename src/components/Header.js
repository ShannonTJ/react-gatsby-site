import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Header = () => {
  return (
    <Nav>
      <NavLink to="/">REACT</NavLink>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  background: transparent;
  height: 80px;
`
const NavLink = styled(Link)``
