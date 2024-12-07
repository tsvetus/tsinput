import React, { useState } from 'react'

import { Icon } from 'tsinput'

import Events from '../../components/Events'

import './Icon.example.css'

const IconExample = () => {
  const [events, setEvents] = useState([])
  return (
    <>
      <div>Icon common example:</div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Icon icon="selected" />
        <Icon
          className="tsi-docs-icon"
          icon="selected"
          onClick={event => setEvents(events.concat({ icon: event.icon }))}
        />
        <Icon
          icon="selected"
          style={{ color: 'green', fontSize: '32px' }}
          name="common"
          data={{ value: 'some value' }}
          onClick={event => setEvents(events.concat({ name: event.name, data: event.data, icon: event.icon }))}
        />
      </div>
      <div>Icon in invalid state:</div>
      <Icon
        className="tsi-docs-icon"
        icon="selected"
        name="invalid"
        invalid={true}
        data={{ value: 'some value' }}
        onClick={event => setEvents(events.concat({ name: event.name, data: event.data, icon: event.icon }))}
      />
      <div>Icon in wait state:</div>
      <Icon
        className="tsi-docs-icon"
        icon="selected"
        name="wait"
        wait={true}
        data={{ value: 'some value' }}
        onClick={event => setEvents(events.concat({ name: event.name, data: event.data, icon: event.icon }))}
      />
      <div>Icon in disabled state:</div>
      <Icon
        className="tsi-docs-icon"
        icon="selected"
        name="wait"
        disabled={true}
        data={{ value: 'some value' }}
        onClick={event => setEvents(events.concat({ name: event.name, data: event.data, icon: event.icon }))}
      />
      <Events events={events} onClear={() => setEvents([])} />
    </>
  )
}

export default IconExample
