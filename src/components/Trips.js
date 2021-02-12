import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const Trips = () => {
  const data = useStaticQuery(graphql`
    query TripsQuery {
        
    }
`)

  return (
    <ProductsContainer>
      <ProductsHeading>Heading</ProductsHeading>
      <ProductWrapper>wrapper</ProductWrapper>
    </ProductsContainer>
  )
}

export default Trips

export const ProductsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw-1300px) / 2);
  background: #000;
  color: gray;
`

export const ProductsHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #000;
`

export const ProductWrapper = styled.div``
