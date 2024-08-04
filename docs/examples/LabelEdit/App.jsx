import React, { useReducer } from 'react'

import { LabelEdit, LabelMemo, stringify } from 'tsinput'

import './App.css'

const stringifyEvent = event => {
  return stringify(event, ['name', 'data', 'value']) + '\n'
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'value':
      return {
        ...state,
        [action.payload.name]: action.payload.value,
        events: state.events.concat(stringifyEvent(action.payload))
      }
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
    <div className="tsi-doc-label-edit">
      <LabelEdit
        className="tsi-doc-label-edit"
        label="Edit label example:"
        name="edit1"
        value={state.edit1}
        onChange={event =>
          dispatch({
            type: 'value',
            payload: event
          })
        }
      />
      <LabelEdit
        className="tsi-doc-label-edit"
        label="Label edit with icon example:"
        name="edit2"
        editIcon="refresh"
        value={state.edit2}
        onChange={event =>
          dispatch({
            type: 'value',
            payload: event
          })
        }
      />
      <LabelEdit
        className="tsi-doc-label-edit"
        label="Label edit with right icon example:"
        editLayout="right"
        name="edit3"
        editIcon="refresh"
        value={state.edit3}
        onChange={event =>
          dispatch({
            type: 'value',
            payload: event
          })
        }
      />
      <LabelEdit
        className="tsi-doc-label-edit"
        label="Label edit with right icon example:"
        labelLayout="right"
        name="edit4"
        editIcon="refresh"
        value={state.edit4}
        onChange={event =>
          dispatch({
            type: 'value',
            payload: event
          })
        }
      />
      <LabelEdit
        className="tsi-doc-label-edit"
        label="Label edit with right icon example:"
        name="edit4"
        labelIcon="refresh"
        value={state.edit4}
        onChange={event =>
          dispatch({
            type: 'value',
            payload: event
          })
        }
      />
      <LabelEdit
        className="tsi-doc-label-edit"
        label="Label edit with right icon example:"
        name="edit4"
        labelIcon="refresh"
        labelLayout="top"
        value={state.edit4}
        onChange={event =>
          dispatch({
            type: 'value',
            payload: event
          })
        }
      />
      <LabelEdit
        className="tsi-doc-label-edit"
        label="Label edit with right icon example:"
        name="edit4"
        labelIcon="refresh"
        labelLayout="top right"
        value={state.edit4}
        onChange={event =>
          dispatch({
            type: 'value',
            payload: event
          })
        }
      />
      <LabelEdit
        className="tsi-doc-label-edit"
        label="Label edit with right icon example:"
        name="edit4"
        labelIcon="refresh"
        editIcon="angle-down"
        labelLayout="top"
        editLayout="right"
        value={state.edit4}
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
