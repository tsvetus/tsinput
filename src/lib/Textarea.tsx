import React, { useMemo, forwardRef, Ref, ChangeEvent, KeyboardEvent, MouseEvent } from 'react'

import { TsiClass, TsiStyle, TsiMouseEventHandler, TsiKeyboardEventHandler, TsiInputEventHandler } from '../util/types'

import { mergeClasses, mergeStyles } from '../util'

interface TextareaProps {
  className?: string | TsiClass
  style?: object | TsiStyle
  name?: string
  data?: unknown
  value?: string
  readOnly: boolean
  placeholder?: string
  onChange?: TsiInputEventHandler<HTMLTextAreaElement>
  onClick?: TsiMouseEventHandler<HTMLTextAreaElement>
  onKeyDown?: TsiKeyboardEventHandler<HTMLTextAreaElement>
}

const BASE = 'tsi-textarea'

const CLASS = {
  _: BASE
}

const Textarea = forwardRef(
  (
    { className, style, name, data, value, readOnly, placeholder, onChange, onClick, onKeyDown }: TextareaProps,
    ref?: Ref<HTMLTextAreaElement>
  ) => {
    const classes = useMemo(() => mergeClasses(CLASS, className), [className])
    const styles = useMemo(() => mergeStyles(style), [style])
    const params = useMemo(() => ({ name, data }), [name, data])
    const handleChange = onChange
      ? (event: ChangeEvent<HTMLTextAreaElement>) => {
          onChange({ ...event, ...params, value: event.target.value })
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
      <textarea
        ref={ref}
        className={classes._}
        style={styles._}
        value={value}
        readOnly={readOnly}
        placeholder={placeholder}
        onChange={handleChange}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
      />
    )
  }
)

Textarea.displayName = 'Textarea'

export default Textarea
