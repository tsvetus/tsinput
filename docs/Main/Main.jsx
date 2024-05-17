import React, { useState } from 'react'

import { Icon, Label, Edit, ListBox, LabelEdit, LabelText } from 'tsinput'

import './Main.css'

const Main = () => {
  const [state, setState] = useState({
    edit1: 'Edit',
    listBox1: 2
  })

  const options = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' }
  ]

  const updateState = event => {
    console.log(event)
    setState({ ...state, [event.name]: event.value })
  }

  return (
    <div>
      <Icon icon={'checked'} />
      <Icon icon={'unchecked'} margin={[4, 4, 4, 4]} />
      <Label text={'Label text:'} icon={'refresh'}>
        Inside label
      </Label>
      <Label text={'Label text:'} icon={'refresh'} wait={true}>
        Inside label
      </Label>
      <Label text={'Label text:'} icon={'refresh'} invalid={true}>
        Inside label
      </Label>
      <Label text={'Label text:'} icon={'refresh'} wait={true} invalid={true}>
        Inside label
      </Label>
      <Label text={'Label text:'} icon={'refresh'} layout={'top right'}>
        Inside label
      </Label>
      <Edit name={'edit1'} value={state.edit1} placeholder={'Enter text'} onChange={updateState} icon={'refresh'} />
      <Edit
        name={'edit1'}
        value={state.edit1}
        placeholder={'Enter text'}
        onChange={updateState}
        icon={'refresh'}
        wait={true}
      />
      <Edit
        name={'edit1'}
        value={state.edit1}
        placeholder={'Enter text'}
        onChange={updateState}
        icon={'refresh'}
        invalid={true}
      />
      <Edit
        name={'edit1'}
        value={state.edit1}
        placeholder={'Enter text'}
        onChange={updateState}
        icon={'refresh'}
        wait={true}
        invalid={true}
      />
      <ListBox name={'listBox1'} options={options} value={state.listBox1} onChange={updateState} />
      <LabelEdit
        name={'inputEdit1'}
        label={'My label:'}
        editIcon={'refresh'}
        value={state.inputEdit1}
        style={{ label: { margin: '1em 0 0 0' } }}
        onChange={updateState}
      />
      <LabelEdit
        labelLayout={'top right'}
        name={'inputEdit2'}
        label={'My label:'}
        editIcon={'refresh'}
        value={state.inputEdit2}
        style={{ label: { margin: '1em 0 0 0' } }}
        onChange={updateState}
      />
      <LabelText
        name={'labelText1'}
        label={'My label:'}
        icon={'refresh'}
        value={state.labeltext1}
        style={{ label: { margin: '1em 0 0 0', height: '200px' } }}
        onChange={updateState}
      />
    </div>
  )
}

export default Main
