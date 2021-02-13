import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { FaRegLightbulb } from "react-icons/fa"

const Testimonials = () => {
  return (
    <TestimonialsContainer>
      <Heading>Testimonials</Heading>
      <Description>What People are Saying</Description>
      <ContentWrapper>
        <ColumnOne>
          <Testimonial>
            <IoMdCheckmarkCircleOutline />
            <h3>Jane Doe</h3>
            <p>
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
              et, non illum commodi dolorem fuga aspernatur, repellat sed minus
              quos error! Eveniet voluptate maiores maxime, at quae voluptatem
              veritatis dignissimos.
            </p>
          </Testimonial>
          <Testimonial>
            <FaRegLightbulb />
            <h3>John Doe</h3>
            <p>
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
              et, non illum commodi dolorem fuga aspernatur, repellat sed minus
              quos error! Eveniet voluptate maiores maxime, at quae voluptatem
              veritatis dignissimos.
            </p>
          </Testimonial>
        </ColumnOne>
        <ColumnTwo>image</ColumnTwo>
      </ContentWrapper>
    </TestimonialsContainer>
  )
}

export default Testimonials

const TestimonialsContainer = styled.div``
