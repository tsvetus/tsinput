import React from 'react'
import PropTypes from 'prop-types'

const Props = ({ data }) => {
  const header = (
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Required</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  )
  const rows = data.map((prop, index) => {
    return (
      <tr key={index}>
        <td>{prop.name}</td>
        <td>{prop.type}</td>
        <td>{prop.required}</td>
        <td>{prop.defaultValue}</td>
        <td>{prop.description}</td>
      </tr>
    )
  })
  return (
    <table>
      <thead>{header}</thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

Props.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string,
      required: PropTypes.bool,
      defaultValue: PropTypes.string,
      description: PropTypes.string
    })
  )
}

export default Props
