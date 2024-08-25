import React, { useMemo, forwardRef, LegacyRef, ChangeEvent, KeyboardEvent, MouseEvent } from 'react'

import { TsiMouseEventHandler, TsiKeyboardEventHandler, TsiInputEventHandler } from '../../util/types'

import { mergeClasses, mergeStyles } from '../../util'

export interface InputClass {
  _?: string
}

export interface InputStyle {
  _?: object
}

export interface InputProps {
  className?: string | InputClass
  style?: object | InputStyle
  name?: string
  data?: unknown
  value?: string
  readOnly?: boolean
  placeholder?: string
  onChange?: TsiInputEventHandler<HTMLInputElement>
  onClick?: TsiMouseEventHandler<HTMLInputElement>
  onKeyDown?: TsiKeyboardEventHandler<HTMLInputElement>
}

const BASE = 'tsi-input'

const CLASS = {
  _: BASE
}

const Input = forwardRef(
  (
    { className, style, name, data, value = '', readOnly, placeholder, onChange, onClick, onKeyDown }: InputProps,
    ref?: LegacyRef<HTMLInputElement>
  ) => {
    const classes = useMemo(() => mergeClasses(CLASS, className), [className])
    const styles = useMemo(() => mergeStyles(style), [style])
    const params = useMemo(() => ({ name, data }), [data, name])
    const handleChange = onChange
      ? (event: ChangeEvent<HTMLInputElement>) => {
          onChange({ ...event, ...params, value: event.target.value })
        }
      : undefined
    const handleClick = onClick
      ? (event: MouseEvent<HTMLInputElement>) => {
          onClick({ ...event, ...params })
        }
      : undefined
    const handleKeyDown = onKeyDown
      ? (event: KeyboardEvent<HTMLInputElement>) => {
          onKeyDown({ ...event, ...params })
        }
      : undefined
    return (
      <input
        ref={ref}
        className={classes._}
        style={styles._}
        type={'text'}
        value={value || ''}
        readOnly={readOnly}
        placeholder={placeholder}
        onChange={handleChange}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
      />
    )
  }
)

Input.displayName = 'Input'

export default Input
