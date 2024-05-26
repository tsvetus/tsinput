import React, { useState, useRef } from 'react'

import { SideBar, TopBar, MenuItem, Page, Content } from 'tsinput'

import Readme from '../examples/Readme/Readme'
import IconDoc from '../examples/IconDoc/IconDoc'

const PAGE_OPTIONS = [
  { key: 'readme', render: () => <Readme /> },
  { key: 'icon', render: () => <IconDoc /> }
]

import './Main.css'

const Main = () => {
  const contentRef = useRef()

  const [state, setState] = useState({
    showSideBar: true,
    page: 'icon'
  })

  const updateState = event => {
    setState({ ...state, [event.name]: event.value })
  }

  return (
    <>
      <TopBar onIconClick={() => updateState({ name: 'showSideBar', value: !state.showSideBar })} />
      <SideBar show={state.showSideBar} onClose={() => updateState({ name: 'showSideBar', value: false })}>
        <MenuItem name={'page'} value={'readme'} onClick={updateState}>
          README
        </MenuItem>
        <MenuItem name={'page'} value={'icon'} onClick={updateState}>
          ICON
        </MenuItem>
      </SideBar>
      <Content ref={contentRef}>
        <Page options={PAGE_OPTIONS} value={state.page} />
      </Content>
    </>
  )
}

export default Main
