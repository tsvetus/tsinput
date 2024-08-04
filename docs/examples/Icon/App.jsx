import React, { useReducer } from 'react'

import { Icon, Label, LabelMemo, stringify } from 'tsinput'

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
      <Label className="tsi-doc-icon-label" text="Icon with onClick event assigned:">
        <Icon
          className="tsi-doc-icon-medium"
          style={{ color: 'green' }}
          icon="close"
          name="test2"
          onClick={event =>
            dispatch({
              type: 'event',
              payload: event
            })
          }
        />
      </Label>

      <Label className="tsi-doc-icon-label" text="Icon with custom style and wait state:">
        <Icon
          className="tsi-doc-icon-medium"
          style={{ color: 'blue' }}
          icon="refresh"
          wait={true}
          name="test1"
          onClick={event =>
            dispatch({
              type: 'event',
              payload: event
            })
          }
        />
      </Label>

      <Label className="tsi-doc-icon-label" text="Icon with invalid state:">
        <Icon name="test" className="tsi-doc-icon-medium" icon="selected" invalid={true} />
      </Label>

      <Label className="tsi-doc-icon-label" text="Draw icon using className:">
        <i className="tsi-icon tsi-icon-burger tsi-doc-icon-medium" />
      </Label>

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
