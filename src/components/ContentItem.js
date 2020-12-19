import React from 'react'
import { graphql, Link } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import ContentTags from './ContentTags'

const ContentItemHeader = ({ data }) => {
  const { title, featuredimage, date } = data.frontmatter
  return (
    <header>
      {featuredimage ? (
        <div className="featured-thumbnail">
          <PreviewCompatibleImage
            imageInfo={{
              image: featuredimage,
              alt: `featured image for ${title}`,
            }}
          />
        </div>
      ) : null}

      <div className="post-meta">
        <Link
          className="title has-text-primary is-size-4 is-block"
          to={data.fields.slug}
        >
          {title}
        </Link>
        <span className="subtitle is-size-5 is-block">
          <div>{date}</div>
        </span>
      </div>
    </header>
  )
}

const ContentItem = ({ data, className }) => {
  const { description, tags } = data.frontmatter
  return (
    <article className={className}>
      <ContentItemHeader data={data} />

      {description && <p>{description}</p>}

      <div dangerouslySetInnerHTML={{ __html: data.html }} />

      <ContentTags tags={tags} />
    </article>
  )
}

export const ContentItemBlobLink = ({ data, className }) => {
  const { tags } = data.frontmatter
  return (
    <div className={`content-item-blob-link ${className || ''}`}>
      <ContentItemHeader data={data} />

      <ContentTags tags={tags} />
    </div>
  )
}

export const query = graphql`
  fragment ContentItemFrontmatterFragment on MarkdownRemark {
    frontmatter {
      title
      contentType
      date(formatString: "MM/DD/YYYY")
      description
      featuredimage
      tags
    }
  }
`

export default ContentItem
