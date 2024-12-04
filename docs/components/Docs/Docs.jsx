import React from 'react'
import PropTypes from 'prop-types'

import Caption from '../Caption'
import Props from '../Props'

const Docs = ({ data }) => {
  const rows = data.map((item, index) => {
    const { props, ...caption } = item
    return (
      <div key={index}>
        <Caption data={caption} />
        <Props data={props} />
      </div>
    )
  })
  return <div>{rows}</div>
}

Docs.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      props: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          type: PropTypes.string,
          required: PropTypes.bool,
          defaultValue: PropTypes.string,
          description: PropTypes.string
        })
      )
    })
  )
}

export default Docs
