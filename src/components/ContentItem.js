import React, { useEffect, useRef } from 'react'
import { graphql, Link } from 'gatsby'
import { isMobile } from 'react-device-detect'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import ContentTags from './ContentTags'

const getVideoPoster = (src, offset = 5) => src
  .replace('upload/v1', `upload/so_${offset}/v1`) // non-transformed videos
  .replace('/v1', `,so_${offset}/v1`) // transformed videos
  .replace('.mp4', '.jpg')

const ContentItemHeader = ({ data, isPreview }) => {
  const videoRef = useRef(null)

  useEffect(() => {
    if (!isMobile && videoRef.current && videoRef.current.paused) {
      const prom = videoRef.current.play()
      if (prom) {
        prom.catch(err => console.log(err))
      }
    }
  })

  const { title, featuredimage, featuredvideo, date, description } = data.frontmatter
  return (
    <header className={`content-item-header ${isPreview ? 'content-preview' : ''}`}>
      <div className="post-meta">
        <span className="title is-block">
          {title}
        </span>
        <span className="date subtitle is-block">
          <div>{date}</div>
        </span>
      </div>

      {description && <p className="content-item-description">{description}</p>}

      {featuredimage || featuredvideo ? (
        <div className="featured-media">
          {featuredvideo ? (
            <video
              ref={videoRef}
              src={featuredvideo}
              poster={getVideoPoster(featuredvideo)}
              controls={!isPreview}
              muted={isPreview}
              loop={true}
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

const ContentItemMediaGallery = ({ data }) => {
  const { galleryImages, galleryVideos } = data.frontmatter
  const items = [
    ...(galleryImages || []).map(src => ({ type: 'image', src })),
    ...(galleryVideos || []).map(src => ({ type: 'video', src })),
  ]
  return items.length === 0 ? null : (
    <div className="columns is-multiline content-item-media-gallery">
      {items.map(({ type, src }, i) => (
        <div key={src} className="is-parent column is-6">
          {type === 'image' ? (
            <PreviewCompatibleImage
              imageInfo={{
                image: src,
                alt: `Image Gallery Image #${i}`,
              }}
            />
          ) : (
            <video
              src={src}
              poster={getVideoPoster(src)}
              controls={true}
            />
          )}
        </div>
      ))}
    </div>
  )
}

const ContentItem = ({ data, className }) => {
  return (
    <article className={`content-item ${className || ''}`}>
      <ContentItemHeader data={data} />
      <ContentItemMediaGallery data={data} />
      <div className="content-item-body" dangerouslySetInnerHTML={{ __html: data.html }} />
      <ContentTags tags={data.frontmatter.tags} />
    </article>
  )
}

export const ContentItemBlobLink = ({ data, className }) => {
  return (
    <Link
      className={`content-item-blob-link is-block ${className || ''}`}
      to={data.fields.slug}
    >
      <ContentItemHeader data={data} isPreview={true} />
      <ContentTags tags={data.frontmatter.tags} />
    </Link>
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
