import React, { useState, useRef } from 'react'

import { SideBar, TopBar, MenuItem, Page, Content } from 'tsinput'

import Readme from '../examples/Readme/Readme'
import Icon from '../examples/Icon/Icon'
import LabelGroup from '../examples/LabelGroup'
import LabelEdit from '../examples/LabelEdit'

const PAGE_OPTIONS = [
  { key: 'readme', render: () => <Readme /> },
  { key: 'icon', render: () => <Icon /> },
  { key: 'labelGroup', render: () => <LabelGroup /> },
  { key: 'labelEdit', render: () => <LabelEdit /> }
]

import './Main.css'

const Main = () => {
  const contentRef = useRef()

  const [state, setState] = useState({
    showSideBar: true,
    page: 'labelEdit'
  })

  const updateState = event => {
    setState({ ...state, [event.name]: event.value })
  }

  return (
    <>
      <TopBar onIconClick={() => updateState({ name: 'showSideBar', value: !state.showSideBar })} />
      <SideBar show={state.showSideBar} onClose={() => updateState({ name: 'showSideBar', value: false })}>
        <MenuItem name={'page'} value={'readme'} onClick={updateState}>
          Readme
        </MenuItem>
        <MenuItem name={'page'} value={'icon'} onClick={updateState}>
          Icon
        </MenuItem>
        <MenuItem name={'page'} value={'labelGroup'} onClick={updateState}>
          LabelGroup
        </MenuItem>
        <MenuItem name={'page'} value={'labelEdit'} onClick={updateState}>
          LabelEdit
        </MenuItem>
      </SideBar>
      <Content ref={contentRef}>
        <Page options={PAGE_OPTIONS} value={state.page} />
      </Content>
    </>
  )
}

export default Main
