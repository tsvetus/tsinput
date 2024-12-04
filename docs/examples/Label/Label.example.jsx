import React, { useState } from 'react'

import { Label } from 'tsinput'

import Events from '../../components/Events'

import './Label.example.css'

const IconExample = () => {
  const [events, setEvents] = useState([])
  return (
    <>
      <div>Label common example:</div>
      <Label className="tsi-docs-label" text="Label caption:">
        Label content
      </Label>
      <Label className="tsi-docs-label" style={{ color: 'red' }} text="Label caption:">
        Label content
      </Label>

      <Events events={events} onClear={() => setEvents([])} />
    </>
  )
}

export default IconExample
