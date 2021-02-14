import React from "react"
import styled from "styled-components"
import EmailBg from "../assets/images/email-1.jpg"
import { Button } from "./Button"

const Email = () => {
  return (
    <EmailContainer>
      <EmailContent>
        <h1>Get Access to Exclusive Offers</h1>
        <p>Sign up for our newsletter to get $100 off your first trip</p>
        <form action="#">
          <FormWrap>
            <label htmlFor="email">
              <input type="email" placeholder="Enter your email" id="email" />
            </label>
            <Button>Sign Up</Button>
          </FormWrap>
        </form>
      </EmailContent>
    </EmailContainer>
  )
}

export default Email

const EmailContainer = styled.div``

const EmailContent = styled.div``

const FormWrap = styled.div``
