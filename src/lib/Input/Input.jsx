import React, { useMemo, forwardRef } from 'react'
import PropTypes from 'prop-types'

import { concat } from '../../util'

import './Input.css'

const CLASS = 'tsi-input'

const Input = forwardRef((props, ref) => {
  const className = useMemo(() => concat(CLASS, props.className), [props.className])
  const onChange = event => {
    if (props.onChange) props.onChange({ value: event.target.value, nativeEvent: event })
  }
  return (
    <input
      ref={ref}
      className={className}
      type={'text'}
      value={props.value || ''}
      readOnly={props.readOnly}
      onChange={onChange}
    />
  )
})

Input.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  readOnly: PropTypes.any,
  onChange: PropTypes.func
}

export default Input
