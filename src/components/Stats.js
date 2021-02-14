import React from "react"
import styled from "styled-components"
import { GiEarthAmerica } from "react-icons/gi"
import { MdAirplanemodeActive, MdTimer } from "react-icons/md"
import { FaMoneyCheck } from "react-icons/fa"

const StatsData = [
  {
    icon: <GiEarthAmerica />,
    title: "Over 100 Destinations",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: <MdAirplanemodeActive />,
    title: "1 Million Trips Made",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: <MdTimer />,
    title: "Fastest Support",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: <FaMoneyCheck />,
    title: "Best Deals",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
]

const Stats = () => {
  return (
    <StatsContainer>
      <Heading>Why Choose Us?</Heading>
      <Wrapper>
        {StatsData.map((item, index) => {
          return (
            <StatsBox key={index}>
              <Icon>{item.icon}</Icon>
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
            </StatsBox>
          )
        })}
      </Wrapper>
    </StatsContainer>
  )
}

export default Stats

const StatsContainer = styled.div`
  width: 100%;
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem calc((100vw - 1300px) / 2);
`

const Heading = styled.h1`
  text-align: start;
  font-size: clamp(1.5rem, 5vw, 2rem);
  margin-bottom: 3rem;
  padding: 0 2rem;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

  @media screen and(max-width: 768px) {
    grid-template-columns: repeat(1fr);
  }

  @media screen and(max-width: 500px) {
    grid-template-columns: repeat(1fr);
  }
`
const StatsBox = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
`

const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`

const Title = styled.div`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  margin-bottom: 0.5rem;
`

const Description = styled.p``
