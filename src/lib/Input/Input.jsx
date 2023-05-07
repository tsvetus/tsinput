import React, { useMemo, forwardRef } from 'react'
import PropTypes from 'prop-types'

import { concat } from '../../util'

import './Input.css'

const CLASS = 'tsi-input'

const Input = forwardRef((props, ref) => {
  const className = useMemo(() => concat(CLASS, props.className), [props.className])
  const onChange = props.onChange ? event => props.onChange({ value: event.target.value, nativeEvent: event }) : null
  const onClick = props.onClick ? event => props.onClick({ nativeEvent: event }) : null
  return (
    <input
      ref={ref}
      className={className}
      style={props.style}
      type={'text'}
      value={props.value || ''}
      readOnly={props.readOnly}
      onChange={onChange}
      onClick={onClick}
    />
  )
})

Input.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  value: PropTypes.string,
  readOnly: PropTypes.any,
  onChange: PropTypes.func,
  onClick: PropTypes.func
}

Input.displayName = 'Input'

export default Input
