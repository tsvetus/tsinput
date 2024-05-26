import React from 'react'

import { Icon } from 'tsinput'

import { listIcons } from '../../util/util'

import './IconDoc.css'

const NAME = 'tsi-doc-icon'

const CLASS = {
  _: `${NAME}-group`,
  vidget: `${NAME}-widget`,
  large: `${NAME}-large`,
  caption: `${NAME}-caption`
}

const ICONS = listIcons()

const Icons = () => {
  const iconsComponent = ICONS.map((v, i) => (
    <div key={i} className={CLASS.vidget}>
      <Icon icon={v} className={CLASS.large}></Icon>
      <div className={CLASS.caption}>{v}</div>
    </div>
  ))
  return <div className={CLASS._}>{iconsComponent}</div>
}

export default Icons
