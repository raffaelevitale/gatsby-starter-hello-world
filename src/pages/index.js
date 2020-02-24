import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"


const IndexPage = () => {
  return (
    <Layout>
      <h1>Hi! </h1>
      <h2>I'm a multidisciplinary designer who likes to code.</h2>
      <p>
        I'm ready to grow. <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}
export default IndexPage
