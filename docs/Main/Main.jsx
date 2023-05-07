import React, { useState } from 'react'

import { Edit, ListBox } from 'tsinput'

import './Main.css'

const Main = () => {
  const [state, setState] = useState({
    value: null
  })

  return (
    <div>
      <Edit
        className={'tsi-docs-edit'}
        name={'edit1'}
        label={'Edit 1'}
        icon={'tsi-icon-box'}
        value={state.edit1}
        onChange={event => setState({ ...state, [event.name]: event.value })}
      />
      <ListBox
        className={'tsi-docs-edit'}
        name={'edit2'}
        label={'Edit 2'}
        value={state.edit2}
        icon={'tsi-icon-box'}
        options={[
          null,
          undefined,
          'string',
          { key: '1', name: 'item 1' },
          { id: '2', label: 'Item 2' },
          { value: '3', text: 'Item 3' },
          { code: '4', name: 'Item 4' },
          { code: '5', name: 'Item 4' },
          { code: '6', name: 'Item 4' },
          { code: '7', name: 'Item 4' },
          { code: '8', name: 'Item 4' },
          { code: '9', name: 'Item 4' },
          { code: '10', name: 'Item 4' },
          { code: '11', name: 'Item 4' },
          { code: '12', name: 'Item 4' },
          { code: '13', name: 'Item 4' },
          { code: '14', name: 'Item 4' }
        ]}
        onChange={event => {
          console.log(event.name, event.value)
          setState({ ...state, [event.name]: event.value })
        }}
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
        layout={'right'}
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
        label={'Edit 7'}
        invalid={true}
        iconPosition={'left'}
        icon={'tsi-icon-box'}
        wait={true}
        value={state.edit7}
        onChange={event => setState({ ...state, [event.name]: event.value })}
      />
      <Edit
        className={'tsi-docs-edit'}
        name={'edit8'}
        label={'Edit 8'}
        invalid={true}
        iconPosition={'top'}
        layout={'top left'}
        icon={'tsi-icon-box'}
        wait={true}
        value={state.edit7}
        onChange={event => setState({ ...state, [event.name]: event.value })}
      />
    </div>
  )
}

export default Main
