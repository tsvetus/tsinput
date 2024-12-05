import React from 'react'

import ReadmeMD from '../../../README.md'

const Readme = () => {
  return <div className="tsi-docs-block" dangerouslySetInnerHTML={{ __html: ReadmeMD }} />
}

export default Readme
