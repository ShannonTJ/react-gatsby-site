import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FaTimes } from "react-icons/fa"
import { Button } from "./Button"

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/">About</SidebarLink>
          <SidebarLink to="/">Trips</SidebarLink>
          <SidebarLink to="/">Careers</SidebarLink>
          <SidebarLink to="/">Contact</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <Button
            to="/"
            primary="true"
            round="true"
            css={`
              font-size: 1.2rem;
            `}
          >
            Book a Flight
          </Button>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar

const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  top: 0;
`
//  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
//   top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

const CloseIcon = styled(FaTimes)`
  color: #fff;
`

const SidebarWrapper = styled.div`
  color: #fff;
`

const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(5, 60px);
  }
`

const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #f26a2e;
    transition: 0.2s ease-in-out;
  }
`
const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`
