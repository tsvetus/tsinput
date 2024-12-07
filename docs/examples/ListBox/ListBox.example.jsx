import React, { useState } from 'react'

import { ListBox } from 'tsinput'

import Events from '../../components/Events'

import './ListBox.example.css'

const OPTIONS = [
  { value: 0, name: 'Item 1' },
  { value: 1, name: 'Item 2' },
  { value: 2, name: 'Item 3' },
  { value: 3, name: 'Item 4' },
  { value: 4, name: 'Item 5' }
]

const ListBoxExample = () => {
  const [state, setState] = useState({ events: [] })
  const handleListBoxChange = event => {
    const { name, data, value } = event
    setState({ ...state, events: state.events.concat({ name, data, value }), [name]: value })
  }
  const handleEventsClear = () => {
    setState({ ...state, events: [] })
  }
  return (
    <>
      <h4>ListkBox example:</h4>
      <ListBox
        className="tsi-docs-list-box"
        name="listBoxA"
        label="ListBox caption:"
        value={state['listBoxA']}
        options={OPTIONS}
        onChange={handleListBoxChange}
      />
      <h4>ListkBox invalid state:</h4>
      <ListBox
        className="tsi-docs-list-box"
        name="listBoxB"
        label="ListBox caption:"
        value={state['listBoxB']}
        options={OPTIONS}
        invalid={true}
        onChange={handleListBoxChange}
      />
      <h4>ListkBox wait state:</h4>
      <ListBox
        className="tsi-docs-list-box"
        name="listBoxC"
        label="ListBox caption:"
        value={state['listBoxC']}
        options={OPTIONS}
        wait={true}
        onChange={handleListBoxChange}
      />
      <h4>ListkBox disabled satte:</h4>
      <ListBox
        className="tsi-docs-list-box"
        name="listBoxD"
        label="ListBox caption:"
        value={state['listBoxD']}
        options={OPTIONS}
        disabled={true}
        onChange={handleListBoxChange}
      />
      <Events events={state.events} onClear={handleEventsClear} />
    </>
  )
}

export default ListBoxExample
