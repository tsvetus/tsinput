import React, { useMemo, MouseEvent, KeyboardEvent } from 'react'

import { mergeClasses, mergeStyles } from '../../util'

import { MenuItemProps } from './types'

const BASE = 'tsi-menu-item'

const CLASS = {
  _: BASE
}

const MenuItem = ({ className, style, name, data, value, children, onClick, onKeyDown }: MenuItemProps) => {
  const classes = useMemo(() => mergeClasses(CLASS, className), [className])
  const styles = useMemo(() => mergeStyles(style), [style])
  const params = useMemo(() => ({ name, data, value }), [data, name, value])
  const handleClick = onClick
    ? (event: MouseEvent<HTMLDivElement>) => {
        onClick({ ...event, ...params })
      }
    : undefined
  const handleKeyDown = onKeyDown
    ? (event: KeyboardEvent<HTMLDivElement>) => {
        onKeyDown({ ...event, ...params })
      }
    : undefined
  return (
    <div className={classes._} style={styles._} onClick={handleClick} onKeyDown={handleKeyDown}>
      {children}
    </div>
  )
}

export default MenuItem
