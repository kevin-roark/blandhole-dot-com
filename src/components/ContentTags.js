import React from 'react'
import { kebabCase } from 'lodash'
import { Link } from 'gatsby'
import { formatTag } from './AllTagsList'

const ContentTags = ({ tags, className }) => {
  return tags && tags.length ? (
    <div className={className} style={{ marginTop: `0.5rem` }}>
      <ul className="taglist">
        {tags.map((tag) => (
          <li key={tag + `tag`}>
            <Link to={`/tags/${kebabCase(tag)}/`} className="taglist-link">
              {formatTag(tag, false)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  ) : null
}

export default ContentTags
