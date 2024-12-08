import React, { useState } from 'react'

import { ListBox } from 'tsinput'

import Events from '../../components/Events'

import './ListBox.example.css'

const OBJECT_OPTIONS = [
  { value: 0, name: 'Item 1' },
  { value: 1, name: 'Item 2' },
  { value: 2, name: 'Item 3' },
  { value: 3, name: 'Item 4' },
  { value: 4, name: 'Item 5' }
]

const STRING_OPTIONS = ['Item string 1', 'Item string 2', 'Item string 3', 'Item string 4', 'Item string 5']

const ListBoxExample = () => {
  const [state, setState] = useState({ events: [] })
  const handleListBoxChange = event => {
    const { name, data, value, option } = event
    setState({ ...state, events: state.events.concat({ name, data, value, option }), [name]: value })
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
        placeholder="Select item"
        options={OBJECT_OPTIONS}
        onChange={handleListBoxChange}
      />
      <ListBox
        className="tsi-docs-list-box"
        name="listBoxS"
        label="ListBox caption:"
        value={state['listBoxS']}
        options={STRING_OPTIONS}
        onChange={handleListBoxChange}
      />
      <h4>ListkBox invalid state:</h4>
      <ListBox
        className="tsi-docs-list-box"
        name="listBoxB"
        label="ListBox caption:"
        value={state['listBoxB']}
        options={OBJECT_OPTIONS}
        invalid={true}
        onChange={handleListBoxChange}
      />
      <h4>ListkBox wait state:</h4>
      <ListBox
        className="tsi-docs-list-box"
        name="listBoxC"
        label="ListBox caption:"
        value={state['listBoxC']}
        options={OBJECT_OPTIONS}
        wait={true}
        onChange={handleListBoxChange}
      />
      <h4>ListkBox disabled satte:</h4>
      <ListBox
        className="tsi-docs-list-box"
        name="listBoxD"
        label="ListBox caption:"
        value={state['listBoxD']}
        options={OBJECT_OPTIONS}
        disabled={true}
        onChange={handleListBoxChange}
      />
      <Events events={state.events} onClear={handleEventsClear} />
    </>
  )
}

export default ListBoxExample
