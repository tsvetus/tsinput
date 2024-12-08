import React, { useState } from 'react'

import { Memo } from 'tsinput'

import Events from '../../components/Events'

import './Memo.example.css'

const MemoExample = () => {
  const [state, setState] = useState({ events: [] })
  const handleEditChange = event => {
    const { name, data, value } = event
    setState({ ...state, events: state.events.concat({ name, data, value }), [name]: value })
  }
  const handleEventsClear = () => {
    setState({ ...state, events: [] })
  }
  return (
    <>
      <h4>Memo example:</h4>
      <Memo
        className="tsi-docs-memo"
        name="memoA"
        placeholder="Please enter any text"
        value={state['memoA']}
        onChange={handleEditChange}
      />
      <Events events={state.events} onClear={handleEventsClear} />
    </>
  )
}

export default MemoExample
