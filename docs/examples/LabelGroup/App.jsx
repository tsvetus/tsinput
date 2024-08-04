import React, { useReducer } from 'react'

import { LabelGroup, LabelMemo, stringify } from 'tsinput'

import './App.css'

const stringifyEvent = event => {
  return stringify(event, ['name', 'data']) + '\n'
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
    <div className="tsi-doc-label-group">
      <LabelGroup
        className="tsi-doc-label-group"
        label="Label group example"
        onLabelClick={event =>
          dispatch({
            type: 'event',
            payload: event
          })
        }
      >
        Group content
      </LabelGroup>
      <LabelGroup
        className="tsi-doc-label-group"
        layout="right"
        label="Label group example"
        onLabelClick={event =>
          dispatch({
            type: 'event',
            payload: event
          })
        }
      >
        Group content
      </LabelGroup>
      <LabelGroup
        className="tsi-doc-label-group"
        icon="close"
        layout="border"
        label="Label group example"
        onIconClick={event =>
          dispatch({
            type: 'event',
            payload: event
          })
        }
      >
        Group content
      </LabelGroup>
      <LabelGroup
        className="tsi-doc-label-group"
        icon="close"
        layout="border right"
        label="Label group example"
        onIconClick={event =>
          dispatch({
            type: 'event',
            payload: event
          })
        }
      >
        Group content
      </LabelGroup>
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
