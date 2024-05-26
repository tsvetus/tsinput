import React, { useReducer } from 'react'

import { Icon, LabelText, stringify } from 'tsinput'

import './App.css'

const stringifyEvent = event => {
  return stringify(event, ['name', 'data', 'value', 'icon']) + '\n'
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'event':
      return {
        ...state,
        events: state.events.concat(stringifyEvent(action.payload))
      }
    case 'clean':
      return {
        ...state,
        events: ''
      }
    case 'text':
      return {
        ...state,
        events: action.payload
      }
    default:
      return state
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, { events: '' })

  return (
    <div className="tsi-doc-icon">
      <Icon
        className="tsi-doc-icon-medium"
        style={{ color: 'green' }}
        icon="close"
        onClick={event =>
          dispatch({
            type: 'event',
            payload: event
          })
        }
      />
      <Icon
        className="tsi-doc-icon-medium"
        style={{ color: 'red' }}
        icon="refresh"
        onClick={event =>
          dispatch({
            type: 'event',
            payload: event
          })
        }
      />
      <LabelText
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
        onChange={event =>
          dispatch({
            type: 'text',
            payload: event.value
          })
        }
      />
    </div>
  )
}

export default App
