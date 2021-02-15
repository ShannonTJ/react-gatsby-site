import React from "react"
import styled from "styled-components"
import { FaTimes } from "react-icons/fa"

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
    </SidebarContainer>
  )
}

export default Sidebar

const SidebarContainer = styled.aside`
  position: fixed;
`

const Icon = styled.div``

const CloseIcon = styled(FaTimes)``
