import React from 'react'
import { ContentItemBlobLink } from './ContentItem'

const ContentList = ({ items }) => (
  <div className="columns is-multiline">
    {items.map((item) => (
      <div className="is-parent column is-4" key={item.id}>
        <ContentItemBlobLink className="blog-list-item tile is-child" data={item} />
      </div>
    ))}
  </div>
)

export default ContentList
