import React from 'react'
import { kebabCase } from 'lodash'
import { Link } from 'gatsby'

const ContentTags = ({ tags, className }) => {
  return tags && tags.length ? (
    <div className={className} style={{ marginTop: `0.5rem` }}>
      <h4 style={{ marginBottom: '0.2rem' }}>Tags</h4>
      <ul className="taglist">
        {tags.map((tag) => (
          <li key={tag + `tag`}>
            <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
          </li>
        ))}
      </ul>
    </div>
  ) : null
}

export default ContentTags
