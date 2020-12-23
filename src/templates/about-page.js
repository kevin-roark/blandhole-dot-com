import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'

export const AboutPageTemplate = ({ title, content }) => {
  return (
    <div>
      <PageTitle title={title} className="black-bg" />

      <section className="section">
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content-item" dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
