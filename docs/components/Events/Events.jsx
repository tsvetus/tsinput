import React from 'react'
import PropTypes from 'prop-types'

import { LabelGroup } from 'tsinput'

import './Events.css'

const Events = ({ events = [], onClear }) => {
  const handleClear = () => {
    if (onClear) {
      onClear()
    }
  }
  const content = events.map((event, index) => {
    return <div key={index}>{JSON.stringify(event)}</div>
  })
  return (
    <LabelGroup
      className={{ group: 'tsi-docs-events-group' }}
      label={{ text: 'Events', icon: 'refresh', onIconClick: handleClear }}
    >
      {content}
    </LabelGroup>
  )
}

Events.propTypes = {
  events: PropTypes.array,
  onClear: PropTypes.func
}

export default Events
