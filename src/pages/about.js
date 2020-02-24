import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <h1>About</h1>
        <p>I don't like to talk about me</p>
        <p>
          <Link to="./contact">Reach out!</Link>
        </p>
      </Layout>
    </div>
  )
}
export default AboutPage
