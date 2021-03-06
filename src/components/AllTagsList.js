import React from 'react'
import { kebabCase, capitalize, words } from 'lodash'
import randomColor from 'randomcolor'
import { Link, graphql, StaticQuery } from 'gatsby'

export const getTagColor = (tag) => randomColor()

export const formatTag = (tag, plural = true) => {
  const f = words(tag).map(capitalize).join(' ')
  const lc = f.charAt(f.length - 1)
  return plural && lc !== 's' && lc !== 'y' ? f + 's' : f
}

class BlobbyTagLinkItem extends React.Component {
  state = { color: randomColor(this.props.tag), pos: this.getPosition() }
  mounted = false

  getPosition() {
    const size = 200
    const maxWidth = typeof window !== 'undefined' ? window.innerWidth : 1000
    const maxHeight = typeof window !== 'undefined' ? window.innerHeight : 1000

    return {
      x: Math.floor(Math.random() * (maxWidth - size)),
      y: Math.floor(Math.random() * (maxHeight - size))
    }
  }

  setPositionLoop() {
    if (this.mounted) {
      this.setState({ pos: this.getPosition() })
      setTimeout(() => this.setPositionLoop(), 5100)
    }
  }

  componentDidMount() {
    this.mounted = true
    setTimeout(() => this.setPositionLoop(), 500)
  }

  componentWillUnmount() {
    this.mounted = false
  }

  render() {
    const { tag, idx } = this.props
    const { color, pos } = this.state

    return (
      <li
        style={{
          backgroundColor: color,
          left: pos.x,
          top: pos.y,
        }}
        className={`${idx % 2 === 1 ? 'ccw' : ''}`}
      >
        <Link
          to={`/tags/${kebabCase(tag)}/`}
          className="all-tags-list-link"
        >
          <span>{formatTag(tag)}</span>
        </Link>
    </li>
    )
  }
}

const AllTagsList = ({ data }) => {
  const { group } = data.allMarkdownRemark
  return (
    <ul className="all-tags-list">
      {group.map((tag, idx) => (
        <BlobbyTagLinkItem
          key={tag.fieldValue}
          idx={idx}
          tag={tag.fieldValue}
        />
      ))}
    </ul>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query AllTagsListQuery {
        allMarkdownRemark(limit: 1000) {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `}
    render={(data) => <AllTagsList data={data} />}
  />
)
