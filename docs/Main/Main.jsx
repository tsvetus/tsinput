import React, { useState } from 'react'

import { Edit } from 'tsinput'

import './Main.css'

const Main = props => {
  const [state, setState] = useState({
    value: null
  })

  return (
    <div>
      <Edit
        className={'tsi-docs-edit'}
        name={'edit1'}
        label={'Edit 1'}
        value={state.edit1}
        onChange={event => setState({ ...state, [event.name]: event.value })}
      />
      <Edit
        className={'tsi-docs-edit'}
        name={'edit2'}
        label={'Edit 2'}
        value={state.edit2}
        icon={'tsi-icon-box'}
        onChange={event => setState({ ...state, [event.name]: event.value })}
      />
      <Edit
        className={'tsi-docs-edit'}
        name={'edit3'}
        label={'Edit 3'}
        value={state.edit3}
        layout={'top left'}
        onChange={event => setState({ ...state, [event.name]: event.value })}
      />
      <Edit
        className={'tsi-docs-edit'}
        name={'edit4'}
        label={'Edit 4'}
        value={state.edit4}
        layout={'top right'}
        onChange={event => setState({ ...state, [event.name]: event.value })}
      />
      <Edit
        className={'tsi-docs-edit'}
        name={'edit5'}
        label={'Edit 5'}
        invalid={true}
        value={state.edit5}
        onChange={event => setState({ ...state, [event.name]: event.value })}
      />
      <Edit
        className={'tsi-docs-edit'}
        name={'edit6'}
        label={'Edit 6'}
        wait={true}
        value={state.edit6}
        onChange={event => setState({ ...state, [event.name]: event.value })}
      />
      <Edit
        className={'tsi-docs-edit'}
        name={'edit7'}
        label={'Edit 4'}
        invalid={true}
        wait={true}
        value={state.edit7}
        onChange={event => setState({ ...state, [event.name]: event.value })}
      />
    </div>
  )
}

export default Main
