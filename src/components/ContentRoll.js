import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import ContentList from './ContentList'

class ContentRoll extends React.Component {
  render() {
    const { data } = this.props
    const edges = data.allMarkdownRemark.edges || []

    return <ContentList items={edges.map(e => e.node)} />
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query ContentRollQuery {
        allMarkdownRemark(
          limit: 50
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "content-item" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              ...ContentItemFrontmatterFragment
            }
          }
        }
      }
    `}
    render={(data, count) => <ContentRoll data={data} count={count} />}
  />
)
