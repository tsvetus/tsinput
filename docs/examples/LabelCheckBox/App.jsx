import React, { useReducer } from 'react'

import { LabelCheckBox, LabelMemo } from 'tsinput'

import './App.css'

const reducer = (state, action) => {
  const { name, value } = action.payload
  switch (action.type) {
    case 'value':
      return {
        ...state,
        [name]: value,
        events: state.events.concat(`${name} = ${value}\n`)
      }
    case 'clean':
      return {
        ...state,
        events: ''
      }
    default:
      return state
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, { events: '' })

  return (
    <div className="tsi-doc-label-check-box">
      <LabelCheckBox
        className="tsi-doc-label-check-box"
        label="Default checkbox:"
        name="value1"
        value={state.value1}
        onChange={event =>
          dispatch({
            type: 'value',
            payload: event
          })
        }
      />
      <LabelCheckBox
        className="tsi-doc-label-check-box"
        label="Default radio button:"
        name="value2"
        radio={true}
        value={state.value2}
        onChange={event =>
          dispatch({
            type: 'value',
            payload: event
          })
        }
      />
      <LabelCheckBox
        className="tsi-doc-label-check-box"
        label="Checkbox with custom values:"
        name="value3"
        value={state.value3}
        valueChecked={'checked'}
        valueUnchecked={'unchecked'}
        onChange={event =>
          dispatch({
            type: 'value',
            payload: event
          })
        }
      />
      <LabelCheckBox
        className="tsi-doc-label-check-box"
        layout="right"
        label="Checkbox with right label and custom values"
        name="value4"
        value={state.value4}
        valueChecked={1}
        valueUnchecked={0}
        onChange={event =>
          dispatch({
            type: 'value',
            payload: event
          })
        }
      />
      <LabelCheckBox
        className="tsi-doc-label-check-box"
        label="Checkbox with cklikable icon only:"
        name="value5"
        value={state.value5}
        events="icon"
        onChange={event =>
          dispatch({
            type: 'value',
            payload: event
          })
        }
      />
      <LabelMemo
        className="tsi-doc-icon-events"
        layout="border"
        label="Events"
        icon="refresh"
        autoHeight={true}
        value={state.events}
        onIconClick={event =>
          dispatch({
            type: 'clean',
            payload: event
          })
        }
      />
    </div>
  )
}

export default App
