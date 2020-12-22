import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import PageTitle from '../../components/PageTitle'
import AllTagsList from '../../components/AllTagsList'

const TagsPage = ({ data }) => {
  const { title } = data.site.siteMetadata
  return (
    <Layout>
      <Helmet title={`Tags | ${title}`} />
      <PageTitle title="All Tags" />
      <AllTagsList />
    </Layout>
  )
}

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
