import React, { useMemo, useCallback, MouseEvent, KeyboardEvent, ReactNode } from 'react'

import { mergeClasses, mergeStyles } from '../util'

import { TsiStyle, TsiMouseEventHandler, TsiKeyboardEventHandler } from '../util/types'

import useLayout from '../hooks/useLayout'

interface TextClass {
  _?: string
  invalid?: string | TsiStyle
  wait?: string | TsiStyle
}

interface TextStyle {
  _?: object
  invalid?: object
  wait?: object
}

interface TextProps {
  className?: string | TextClass
  style?: object | TextStyle
  name?: string
  data?: unknown
  wait?: unknown
  invalid?: unknown
  value?: string | ReactNode
  onClick?: TsiMouseEventHandler<HTMLDivElement>
  onKeyDown?: TsiKeyboardEventHandler<HTMLDivElement>
}

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

  const { classes, styles } = useLayout(layoutClasses, layoutStyles, mergeLayout)

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
