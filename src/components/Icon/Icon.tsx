import React, { useMemo, useCallback, MouseEvent, KeyboardEvent } from 'react'

import { mergeClasses, mergeStyles } from '../../util'

import useLayout from '../../hooks/useLayout'

import { IconProps } from './types'

const BASE = 'tsi-icon'

const CLASS = {
  _: '',
  active: `${BASE}-active`,
  invalid: `${BASE}-invalid`,
  wait: `${BASE}-wait`
}

/**
 * Icon component.
 * Provides a simple way to add icons to React application. Requires pre-installation of icon fonts.
 * Instructions for installing and generating fonts are contained in the documentation.
 */
const Icon = ({
  className,
  style,
  icon = 'tsinput',
  name,
  data,
  baseClass = BASE,
  wait,
  invalid,
  onClick,
  onKeyDown
}: IconProps) => {
  const active = Boolean(onClick)

  const layoutClasses = useMemo(
    () => mergeClasses(CLASS, baseClass || BASE, icon ? `${BASE}-${icon}` : null, className),
    [baseClass, className, icon]
  )

  const layoutStyles = useMemo(() => mergeStyles(style), [style])

  const mergeLayout = useCallback(
    (key: string) => {
      switch (key) {
        case 'active':
          return active
        case 'wait':
          return wait
        case 'invalid':
          return invalid
        default:
          return false
      }
    },
    [active, wait, invalid]
  )

  const [classes, styles] = useLayout(layoutClasses, layoutStyles, mergeLayout)

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
