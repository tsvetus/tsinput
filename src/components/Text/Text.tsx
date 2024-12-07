import React, { useMemo, MouseEvent, KeyboardEvent } from 'react'

import { createLayout } from '../../util'

import { TextProps } from './types'

const BASE = 'tsi-text'

const CLASS = {
  _: BASE,
  invalid: `${BASE}-invalid`,
  wait: `${BASE}-wait`
}

const Text = ({ className, style, name, data, wait, invalid, value, onClick, onKeyDown }: TextProps) => {
  const [classes, styles] = useMemo(
    () =>
      createLayout([CLASS, className], [style], {
        wait: wait,
        invalid: invalid
      }),
    [className, style]
  )

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
