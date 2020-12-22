import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'
import AllTagsList from '../components/AllTagsList'

const IndexPageHeader = ({ data }) => {
  const { title, description } = data
  return (
    <div style={{ marginBottom: 20 }}>
      <PageTitle title={title} className="black-bg" />
      <div className="flex" style={{ marginTop: 20 }}>
        <h3
          className="has-text-weight-semibold is-size-2 shadow3 pad25"
          style={{ backgroundColor: '#fff' }}
        >
          {description}
        </h3>
      </div>
    </div>
  )
}

export const IndexPageImage = ({ data }) => {
  const { image } = data
  return image.childImageSharp ? (
    <div className="column is-12" style={{ display: 'flex', justifyContent: 'center' }}>
      <img
        src={image.childImageSharp.fluid.src}
        alt="Blandhole Logo"
        className="shadow4"
        style={{ maxWidth: '100%', maxHeight: 300 }}
      />
    </div>
  ) : null
}

export const IndexPageTemplate = ({ data }) => {
  return (
    <div>
      <IndexPageHeader data={data} />
      <IndexPageImage data={data} />
      <AllTagsList />
    </div>
  )
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <IndexPageTemplate data={frontmatter} />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 600, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
      }
    }
  }
`
