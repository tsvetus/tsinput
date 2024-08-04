import React, { useMemo, useCallback, MouseEvent, KeyboardEvent } from 'react'

import { mergeClasses, mergeStyles } from '../util'

import { TsiMouseEventHandler, TsiKeyboardEventHandler } from '../util/types'

import useLayout from '../hooks/useLayout'

interface IconClass {
  _?: string
  active?: string
  invalid?: string
  wait?: string
}

interface IconStyle {
  _?: object
  active?: object
  invalid?: object
  wait?: object
}

interface IconProps {
  className?: string | IconClass
  style?: object | IconStyle
  icon?: string
  name?: string
  data?: unknown 
  baseClass?: string 
  wait?: unknown
  invalid?: unknown
  onClick?: TsiMouseEventHandler<HTMLElement>
  onKeyDown?: TsiKeyboardEventHandler<HTMLElement>
}

const BASE = 'tsi-icon'

const CLASS = {
  _: '',
  active: `${BASE}-active`,
  invalid: `${BASE}-invalid`, 
  wait: `${BASE}-wait` 
}

const Icon = ({ className, style, icon, name, data, baseClass = BASE, wait, invalid, onClick, onKeyDown }: IconProps) => {
  const active = Boolean(onClick)

  const layoutClasses = useMemo(
    () => mergeClasses(CLASS, baseClass || BASE, icon ? `${BASE}-${icon}` : null, className ), 
    [baseClass, className, icon]
  )

  const layoutStyles = useMemo(() => mergeStyles(style), [style])

  const mergeLayout = useCallback((key: string) => {
    switch (key) {
      case 'active': return active
      case 'wait': return wait
      case 'invalid': return invalid
      default: return false      
    }
  }, [active, wait, invalid])

  const { classes, styles } = useLayout(layoutClasses, layoutStyles, mergeLayout)

  const params = useMemo(() => ({ name, data, value: icon, icon }), [icon, data, name])

  const handleClick = onClick
    ? (event: MouseEvent<HTMLElement>) => {
        if (!wait) {
          onClick({ ...event, ...params })
        }
      }
    : undefined

  const handleKeyDown = onKeyDown
    ? (event: KeyboardEvent<HTMLElement>) => {
        if (!wait) {
          onKeyDown({ ...event, ...params })
        }
      }
    : undefined  

  return <i className={classes._} style={styles._} onClick={handleClick} onKeyDown={handleKeyDown} />
}

export default Icon
