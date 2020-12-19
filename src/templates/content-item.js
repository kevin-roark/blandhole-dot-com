import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ContentItem from '../components/ContentItem'

export const ContentItemTemplate = ({ data, helmet }) => {
  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <ContentItem
            data={data}
            className="column is-10 is-offset-1"
          />
        </div>
      </div>
    </section>
  )
}

const ContentItemPage = ({ data }) => {
  const { markdownRemark: content } = data

  return (
    <Layout>
      <ContentItemTemplate
        data={content}
        helmet={
          <Helmet titleTemplate="%s | Content">
            <title>{`${content.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${content.frontmatter.description}`}
            />
          </Helmet>
        }
      />
    </Layout>
  )
}

export default ContentItemPage

export const pageQuery = graphql`
  query ContentItemById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields { slug }
      ...ContentItemFrontmatterFragment
    }
  }
`
