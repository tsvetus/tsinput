import React, { useMemo } from 'react'

import { TsiKeyboardEvent, TsiMouseEvent } from '../../util/types'
import { mergeClasses, mergeStyles } from '../../util'

import MenuItem from '../MenuItem'

import { MenuProps } from './types'

const BASE = 'tsi-menu'

const CLASS = {
  _: BASE
}

const Menu = ({ className, style, name, data, options, onItemClick, onItemKeyDown }: MenuProps) => {
  const classes = useMemo(() => mergeClasses(CLASS, className), [className])
  const styles = useMemo(() => mergeStyles(style), [style])
  const params = useMemo(() => ({ name, data }), [data, name])
  const handleClick = onItemClick
    ? (event: TsiMouseEvent<HTMLDivElement>) => {
        onItemClick({ ...event, ...params })
      }
    : undefined
  const handleKeyDown = onItemKeyDown
    ? (event: TsiKeyboardEvent<HTMLDivElement>) => {
        onItemKeyDown({ ...event, ...params })
      }
    : undefined
  const optionsComponent = options
    ? options.map((option, index) => (
        <MenuItem key={index} name={name} value={option.key} onClick={handleClick} onKeyDown={handleKeyDown}>
          {option.name || option.key || ''}
        </MenuItem>
      ))
    : null
  return (
    <div className={classes._} style={styles._}>
      {optionsComponent}
    </div>
  )
}

export default Menu
