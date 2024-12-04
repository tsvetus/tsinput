import React from 'react'
import PropTypes from 'prop-types'

const Caption = ({ data }) => {
  return (
    <div>
      <div>{data.name}</div>
      <div>{data.description}</div>
    </div>
  )
}

Caption.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string
    })
  )
}

export default Caption
