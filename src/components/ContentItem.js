import React from 'react'
import { graphql, Link } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import ContentTags from './ContentTags'

const ContentItemHeader = ({ data }) => {
  const { title, featuredimage, featuredvideo, date } = data.frontmatter
  return (
    <header>
      <div className="post-meta">
        <Link
          className="title is-block"
          to={data.fields.slug}
        >
          {title}
        </Link>
        <span className="date subtitle is-block">
          <div>{date}</div>
        </span>
      </div>

      {featuredimage || featuredvideo ? (
        <div className="featured-thumbnail">
          {featuredvideo ? (
            <video
              src={featuredvideo}
            />
          ) : (
            <PreviewCompatibleImage
              imageInfo={{
                image: featuredimage,
                alt: `featured image for ${title}`,
              }}
            />
          )}
        </div>
      ) : null}
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
      featuredvideo
      galleryImages
      tags
    }
  }
`

export default ContentItem
