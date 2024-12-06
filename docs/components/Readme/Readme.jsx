import React from 'react'

import ReadmeMD from '../../../README.md'

const Readme = () => {
  return (
    <div className="tsi-docs">
      <div className="tsi-docs-block" dangerouslySetInnerHTML={{ __html: ReadmeMD }} />
    </div>
  )
}

export default Readme
