import React, { useMemo, forwardRef, Ref, ChangeEvent, KeyboardEvent, MouseEvent } from 'react'

import Textarea from '../../lib/Textarea'

import { createLayout } from '../../util'

import { MemoProps } from './types'

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
    const isReadOnly = useMemo(() => Boolean(readOnly || wait || !onChange), [onChange, readOnly, wait])

    const [classes, styles] = useMemo(
      () =>
        createLayout([CLASS, className], [style], {
          wait: wait,
          invalid: invalid
        }),
      [className, style]
    )
    const params = useMemo(() => ({ name, data }), [data, name])

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
