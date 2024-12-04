import React from 'react'

import { Icon } from 'tsinput'

import './Icon.list.css'

const listClasses = () => {
  const classes = []
  for (const sheet of document.styleSheets) {
    for (const rule of sheet.cssRules) {
      classes.push(rule.selectorText)
    }
  }
  return classes
}

const iconExp = /^\.tsi-icon-(.+)::before$/

const listIcons = () =>
  listClasses()
    .map(v => iconExp.exec(v))
    .filter(v => v)
    .map(v => v[1])

const NAME = 'tsi-docs-icon'

const CLASS = {
  _: `${NAME}-group`,
  vidget: `${NAME}-widget`,
  large: `${NAME}-large`,
  caption: `${NAME}-caption`
}

const ICONS = listIcons()

const IconList = () => {
  const iconsComponent = ICONS.map((v, i) => (
    <div key={i} className={CLASS.vidget}>
      <Icon icon={v} className={CLASS.large}></Icon>
      <div className={CLASS.caption}>{v}</div>
    </div>
  ))
  return <div className={CLASS._}>{iconsComponent}</div>
}

export default IconList
