import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <h1>About</h1>
    <p>AccessiReference is an application designed to help developers easily implement accessibility features into their applications. Information used throughout the site largely draws from the Deque Comprehensive Online Accessibility Cirriculum.</p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`