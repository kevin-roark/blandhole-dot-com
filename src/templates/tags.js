import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import { getTagColor, formatTag } from '../components/AllTagsList'
import PageTitle from '../components/PageTitle'
import ContentList from '../components/ContentList'

class TagRoute extends React.Component {
  render() {
    const { tag } = this.props.pageContext
    const { title } = this.props.data.site.siteMetadata
    const { totalCount, edges } = this.props.data.allMarkdownRemark

    return (
      <Layout>
        <Helmet title={`${tag} | ${title}`} />

        <PageTitle
          title={`${totalCount} ${formatTag(tag, false)} Content Item${totalCount > 1 ? 's' : ''}`}
          style={{ backgroundColor: getTagColor(tag), color: '#aaa' }}
        />

        <section className="section">
          <div className="container content">
            <ContentList items={edges.map(e => e.node)} />

            <div className="flex" style={{ justifyContent: 'center', marginTop: 200 }}>
              <h2 className="shadow3 pad25" style={{ backgroundColor: '#fff', fontSize: '3em' }}>
                <Link to="/tags/" style={{ textDecoration: 'none' }}>
                  Browse all tags
                </Link>
              </h2>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          ...ContentItemFrontmatterFragment
        }
      }
    }
  }
`
