import React, { useState } from 'react'

import { CheckBox } from 'tsinput'

import Events from '../../components/Events'

import './CheckBox.example.css'

const CheckBoxExample = () => {
  const [state, setState] = useState({ events: [] })
  const handleCheckBoxChange = event => {
    const { name, data, value } = event
    setState({ ...state, events: state.events.concat({ name, data, value }), [name]: value })
  }
  const handleEventsClear = () => {
    setState({ ...state, events: [] })
  }
  return (
    <>
      <h4>CheckBox example:</h4>
      <CheckBox
        className="tsi-docs-check-box"
        name="checkBoxA"
        label="CheckBox caption:"
        value={state['checkBoxA']}
        onChange={handleCheckBoxChange}
      />
      <CheckBox
        className="tsi-docs-check-box"
        name="checkBoxB"
        label="CheckBox caption:"
        value={state['checkBoxB']}
        radio={true}
        onChange={handleCheckBoxChange}
      />
      <h4>CheckBox layout example:</h4>
      <CheckBox
        className={{ _: 'tsi-docs-check-box', icon: 'tsi-docs-check-box-icon', label: 'tsi-docs-check-box-label' }}
        layout="right"
        name="checkBoxC"
        label="checkBox caption"
        value={state['checkBoxC']}
        onChange={handleCheckBoxChange}
      />
      <CheckBox
        className="tsi-docs-check-box"
        style={{ icon: { color: 'red' }, label: { color: 'green' } }}
        layout="right"
        name="checkBoxD"
        label="checkBox caption"
        value={state['checkBoxD']}
        radio={true}
        onChange={handleCheckBoxChange}
      />
      <Events events={state.events} onClear={handleEventsClear} />
    </>
  )
}

export default CheckBoxExample
