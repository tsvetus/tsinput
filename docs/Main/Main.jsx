import React, { useState } from 'react'

import { SideBar, TopBar, Page, Content, Menu } from 'tsinput'

import Readme from '../examples/Readme/Readme'
import Icon from '../examples/Icon/Icon'
import LabelGroup from '../examples/LabelGroup'
import LabelEdit from '../examples/LabelEdit'
import LabelCheckBox from '../examples/LabelCheckBox'

const PAGE_OPTIONS = [
  { key: 'Readme', render: () => <Readme /> },
  { key: 'Icon', render: () => <Icon /> },
  { key: 'LabelGroup', render: () => <LabelGroup /> },
  { key: 'LabelEdit', render: () => <LabelEdit /> },
  { key: 'LabelCheckBox', render: () => <LabelCheckBox /> }
]

import './Main.css'

const Main = () => {
  const [state, setState] = useState({
    showSideBar: true,
    page: 'LabelCheckBox'
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
