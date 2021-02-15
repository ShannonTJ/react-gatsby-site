import React from "react"
import { GiEarthAmerica } from "react-icons/gi"
import { MdAirplanemodeActive, MdTimer } from "react-icons/md"
import { FaMoneyCheck } from "react-icons/fa"

export const StatsData = [
  {
    icon: (
      <GiEarthAmerica
        css={`
          color: #047bf1;
        `}
      />
    ),
    title: "100+ Destinations",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: (
      <MdAirplanemodeActive
        css={`
          color: #f3a82e;
        `}
      />
    ),
    title: "1 Million Trips Made",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: (
      <MdTimer
        css={`
          color: #f34f2e;
        `}
      />
    ),
    title: "Fastest Support",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: (
      <FaMoneyCheck
        css={`
          color: #3af576;
        `}
      />
    ),
    title: "Best Deals",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
]
