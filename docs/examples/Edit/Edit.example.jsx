import React, { useState } from 'react'

import { Edit } from 'tsinput'

import Events from '../../components/Events'

import './Edit.example.css'

const EditExample = () => {
  const [state, setState] = useState({ events: [] })
  const handleEditChange = event => {
    const { name, data, value } = event
    setState({ ...state, events: state.events.concat({ name, data, value }), [name]: value })
  }
  const handleEditClear = event => {
    const { name, data, value } = event
    setState({ ...state, events: state.events.concat({ name, data, value }), [name]: '' })
  }
  const handleEventsClear = () => {
    setState({ ...state, events: [] })
  }
  return (
    <>
      <h4>Edit example:</h4>
      <Edit className="tsi-docs-edit" name="editA" value={state['editA']} onChange={handleEditChange} />
      <h4>Edit with icon example:</h4>
      <Edit
        className="tsi-docs-edit"
        name="editB"
        value={state['editB']}
        icon="close"
        onChange={handleEditChange}
        onIconClick={handleEditClear}
      />
      <h4>Detailed stylyzation using &quot;className&quot;:</h4>
      <Edit
        className={{
          _: 'tsi-docs-edit tsi-docs-edit-border',
          input: 'tsi-docs-edit-input',
          icon: 'tsi-docs-edit-icon'
        }}
        name="editC"
        value={state['editC']}
        icon="close"
        onChange={handleEditChange}
        onIconClick={handleEditClear}
      />
      <h4>Detailed stylyzation using &quot;style&quot;:</h4>
      <Edit
        className="tsi-docs-edit"
        style={{ _: { color: 'red', border: '2px solid red' }, input: { color: 'green' } }}
        name="editD"
        value={state['editD']}
        icon="close"
        onChange={handleEditChange}
        onIconClick={handleEditClear}
      />
      <h4>Edit component with &quot;icon&quot; and &quot;layout&quot;:</h4>
      <Edit
        className="tsi-docs-edit"
        name="editE"
        value={state['editE']}
        icon="close"
        layout="right"
        onChange={handleEditChange}
        onIconClick={handleEditClear}
      />
      <h4>Edit &quot;invalid&quot; state:</h4>
      <Edit
        className="tsi-docs-edit"
        name="editF"
        value={state['editF']}
        icon="close"
        invalid={true}
        onChange={handleEditChange}
        onIconClick={handleEditClear}
      />
      <h4>Edit &quot;wait&quot; state:</h4>
      <Edit
        className="tsi-docs-edit"
        name="editG"
        value={state['editG']}
        icon="close"
        wait={true}
        onChange={handleEditChange}
        onIconClick={handleEditClear}
      />
      <h4>Edit &quot;disabled&quot; state:</h4>
      <Edit
        className="tsi-docs-edit"
        name="editG"
        value={state['editG']}
        icon="close"
        disabled={true}
        onChange={handleEditChange}
        onIconClick={handleEditClear}
      />
      <Events events={state.events} onClear={handleEventsClear} />
    </>
  )
}

export default EditExample
