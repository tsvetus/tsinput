import React, { useState, useRef } from 'react'

import { Icon, Label, Edit, ListBox, LabelEdit, LabelText, SideBar, TopBar, TabControl, CheckBox } from 'tsinput'

import './Main.css'

const Main = () => {
  const topBarRef = useRef()
  const contentRef = useRef()

  const [state, setState] = useState({
    edit1: 'Edit',
    listBox1: 2,
    tabKey: 'first'
  })

  const options = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' }
  ]

  const tabOptions = [
    {
      key: 'first',
      caption: 'First tab',
      render: () => {
        return <div>First content</div>
      }
    },
    {
      key: 'second',
      caption: 'Second tab',
      render: () => {
        return <div>Second content</div>
      }
    }
  ]

  const updateState = event => {
    console.log(event)
    setState({ ...state, [event.name]: event.value })
  }

  return (
    <div>
      <TopBar
        ref={topBarRef}
        name={'top'}
        onIconClick={() => updateState({ name: 'showSideBar', value: !state.showSideBar })}
      />
      <SideBar
        show={state.showSideBar}
        topRef={topBarRef}
        targetRef={contentRef}
        onClose={() => updateState({ name: 'showSideBar', value: false })}
      />
      <div ref={contentRef}>
        <TabControl options={tabOptions} value={state.tabKey} name={'tabKey'} onChange={updateState} />
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
        <CheckBox name={'checkBox'} text={'Checkbox:'} value={state.checkBox} onChange={updateState} />
        <CheckBox
          radio={true}
          name={'radioButton'}
          text={'Radio button:'}
          value={state.radioButton}
          onChange={updateState}
        />
        <CheckBox
          radio={true}
          layout={'right'}
          name={'radioButton'}
          text={'Radio button:'}
          value={state.radioButton}
          onChange={updateState}
        />
      </div>
    </div>
  )
}

export default Main
