import React, { useMemo, forwardRef } from 'react'
import PropTypes from 'prop-types'

import { mergeClasses, mergeStyles } from '../util'

const NAME = 'tsi-input'

const CLASS = {
  _: NAME
}

const Input = forwardRef(
  ({ className, style, name, data, value, readOnly, placeholder, onChange, onClick, onKeyDown }, ref) => {
    const classes = useMemo(() => mergeClasses(CLASS, className), [className])
    const styles = useMemo(() => mergeStyles(style), [style])
    const params = useMemo(() => ({ name, data }), [data, name])
    const handleChange = onChange
      ? event => {
          onChange({ ...event, ...params, value: event.target.value })
        }
      : null
    const handleClick = onClick
      ? event => {
          onClick({ ...event, ...params })
        }
      : null
    const handleKeyDown = onKeyDown
      ? event => {
          onKeyDown({ ...event, ...params })
        }
      : null
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

Input.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  style: PropTypes.object,
  name: PropTypes.string,
  data: PropTypes.any,
  value: PropTypes.string,
  readOnly: PropTypes.any,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func
}

Input.displayName = 'Input'

export default Input
