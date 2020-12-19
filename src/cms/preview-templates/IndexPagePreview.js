import React from 'react'
import { IndexPageTemplate } from '../../templates/index-page'

/**
 * Custom Preview Docs: https://www.netlifycms.org/docs/customization/
 * props are: entry, widgetFor, getAsset
 */
const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        data={{
          ...data,
          image: getAsset(data.image),
        }}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

export default IndexPagePreview
