import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ContentRoll from '../components/ContentRoll'

export const IndexPageTemplate = ({ data }) => {
  const { image, title, heading, description } = data
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            backgroundColor: '#000',
            color: '#fff',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
      </div>

      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        {heading}
                      </h3>
                      <p>{description}</p>
                    </div>
                  </div>

                  {!!image.childImageSharp && (
                    <div className="column is-12" style={{ display: 'flex', justifyContent: 'center' }}>
                      <img
                        src={image.childImageSharp.fluid.src}
                        style={{ maxWidth: '100%' }}
                      />
                    </div>
                  )}

                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Latest Content
                    </h3>
                    <ContentRoll />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
            fluid(maxWidth: 720, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
      }
    }
  }
`
