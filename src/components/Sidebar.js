import React from "react"
import styled from "styled-components"
import { FaTimes } from "react-icons/fa"

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
