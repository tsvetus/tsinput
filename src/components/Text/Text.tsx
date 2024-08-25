import React, { useMemo, useCallback, MouseEvent, KeyboardEvent } from 'react'

import { mergeClasses, mergeStyles } from '../../util'

import useLayout from '../../hooks/useLayout'

import { TextProps } from './types'

const BASE = 'tsi-text'

const CLASS = {
  _: '',
  invalid: `${BASE}-invalid`,
  wait: `${BASE}-wait`
}

const Text = ({ className, style, name, data, wait, invalid, value, onClick, onKeyDown }: TextProps) => {
  const layoutClasses = useMemo(() => mergeClasses(CLASS, className), [className])

  const layoutStyles = useMemo(() => mergeStyles(style), [style])

  const mergeLayout = useCallback(
    (key: string) => {
      switch (key) {
        case 'wait':
          return wait
        case 'invalid':
          return invalid
        default:
          return false
      }
    },
    [wait, invalid]
  )

  const [classes, styles] = useLayout(layoutClasses, layoutStyles, mergeLayout)

  const params = useMemo(() => ({ name, data }), [data, name])

  const handleClick = onClick
    ? (event: MouseEvent<HTMLDivElement>) => {
        if (!wait) {
          onClick({ ...event, ...params })
        }
      }
    : undefined

  const handleKeyDown = onKeyDown
    ? (event: KeyboardEvent<HTMLDivElement>) => {
        if (!wait) {
          onKeyDown({ ...event, ...params })
        }
      }
    : undefined

  return (
    <div className={classes._} style={styles._} onClick={handleClick} onKeyDown={handleKeyDown}>
      {value}
    </div>
  )
}

export default Text
