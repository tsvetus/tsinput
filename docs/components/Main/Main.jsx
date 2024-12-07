import React, { useState } from 'react'

import { SideBar, TopBar, Page, Content, Menu } from 'tsinput'

import Readme from '../Readme'

import Icon from '../../examples/Icon'
import Label from '../../examples/Label'
import Edit from '../../examples/Edit'
import CheckBox from '../../examples/CheckBox'
import ListBox from '../../examples/ListBox'

const PAGE_OPTIONS = [
  { key: 'Readme', render: () => <Readme /> },
  { key: 'Icon', render: () => <Icon /> },
  { key: 'Label', render: () => <Label /> },
  { key: 'Edit', render: () => <Edit /> },
  { key: 'CheckBox', render: () => <CheckBox /> },
  { key: 'ListBox', render: () => <ListBox /> }
]

import './Main.css'

const Main = () => {
  const [state, setState] = useState({
    showSideBar: true,
    page: 'Readme'
  })

  const updateState = event => {
    setState({ ...state, [event.name]: event.value })
  }

  return (
    <>
      <TopBar onIconClick={() => updateState({ name: 'showSideBar', value: !state.showSideBar })} />
      <SideBar show={state.showSideBar} onClose={() => updateState({ name: 'showSideBar', value: false })}>
        <Menu name={'page'} options={PAGE_OPTIONS} onItemClick={updateState} />
      </SideBar>
      <Content>
        <Page options={PAGE_OPTIONS} value={state.page} />
      </Content>
    </>
  )
}

export default Main
