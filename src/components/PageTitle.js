import React from 'react'

const PageTitle = ({ title, className, style }) => {
  return (
    <div className="flex">
      <h1
        className={`page-header ${className || ''} has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen`}
        style={style}
      >
        {title}
      </h1>
    </div>
  )
}

export default PageTitle
