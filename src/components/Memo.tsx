import React, { useMemo, useCallback, forwardRef, Ref, ChangeEvent, KeyboardEvent, MouseEvent } from 'react'

import Textarea from '../lib/Textarea'

import { mergeClasses, mergeStyles } from '../util'

import { TsiClass, TsiMouseEventHandler, TsiKeyboardEventHandler, TsiInputEventHandler } from '../util/types'

import useLayout from '../hooks/useLayout'

interface MemoClass {
  _?: string | TsiClass
  invalid?: string | TsiClass
  wait?: string
}

interface MemoStyle {
  _?: object
  invalid?: object
  wait?: object
}

interface MemoProps {
  className?: string | MemoClass
  style?: object | MemoStyle
  name?: string
  data?: unknown
  wait?: unknown
  invalid?: unknown
  value?: string
  readOnly?: boolean
  placeholder?: string
  onChange?: TsiInputEventHandler<HTMLTextAreaElement>
  onClick?: TsiMouseEventHandler<HTMLTextAreaElement>
  onKeyDown?: TsiKeyboardEventHandler<HTMLTextAreaElement>
}

const BASE = 'tsi-memo'

const CLASS = {
  _: `${BASE}`,
  invalid: `${BASE}-invalid`,
  wait: `${BASE}-wait`
}

const Memo = forwardRef(
  (
    {
      className,
      style,
      name,
      data,
      value,
      placeholder,
      readOnly,
      wait,
      invalid,
      onChange,
      onClick,
      onKeyDown
    }: MemoProps,
    ref?: Ref<HTMLTextAreaElement>
  ) => {
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

    const isReadOnly = useMemo(() => Boolean(readOnly || wait), [readOnly, wait])

    const handleChange = onChange
      ? (event: ChangeEvent<HTMLTextAreaElement>) => {
          if (!isReadOnly) {
            onChange({ ...event, ...params, value: event.target.value })
          }
        }
      : undefined

    const handleClick = onClick
      ? (event: MouseEvent<HTMLTextAreaElement>) => {
          onClick({ ...event, ...params })
        }
      : undefined

    const handleKeyDown = onKeyDown
      ? (event: KeyboardEvent<HTMLTextAreaElement>) => {
          onKeyDown({ ...event, ...params })
        }
      : undefined

    return (
      <Textarea
        ref={ref}
        className={classes}
        style={styles}
        value={value}
        placeholder={placeholder}
        readOnly={isReadOnly}
        onChange={handleChange}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
      />
    )
  }
)

Memo.displayName = 'Memo'

export default Memo
