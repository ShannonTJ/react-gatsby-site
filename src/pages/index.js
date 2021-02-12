import React from "react"
import Hero from "../components/Hero"
import Trips from "../components/Trips"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Trips />
  </Layout>
)

export default IndexPage
