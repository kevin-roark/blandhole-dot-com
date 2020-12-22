import React from 'react'
import { ContentItemTemplate } from '../../templates/content-item'

const ContentItemPreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()
  return (
    <ContentItemTemplate
      data={{
        html: widgetFor('body'),
        fields: { slug: '' },
        frontmatter: data,
      }}
    />
  )
}

export default ContentItemPreview
