import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { ContentItemBlobLink } from './ContentItem'

class ContentRoll extends React.Component {
  render() {
    const { data } = this.props
    const edges = data.allMarkdownRemark.edges || []

    return (
      <div className="columns is-multiline">
        {edges.map(({ node }) => (
          <div className="is-parent column is-4" key={node.id}>
            <ContentItemBlobLink className="blog-list-item tile is-child box notification" data={node} />
          </div>
        ))}
      </div>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query ContentRollQuery {
        allMarkdownRemark(
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
