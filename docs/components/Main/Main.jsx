import React, { useState } from 'react'

import { SideBar, TopBar, Page, Content, Menu } from 'tsinput'

import Icon from '../../examples/Icon'
import Label from '../../examples/Label'

const PAGE_OPTIONS = [
  { key: 'Icon', render: () => <Icon /> },
  { key: 'Label', render: () => <Label /> }
]

import './Main.css'

const Main = () => {
  const [state, setState] = useState({
    showSideBar: true,
    page: 'Icon'
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
