import React, { useMemo, forwardRef } from 'react'
import PropTypes from 'prop-types'

import { mergeClasses, mergeStyles } from '../util'

const NAME = 'tsi-input'

const CLASS = {
  _: NAME
}

const Input = forwardRef((props, ref) => {
  const classes = useMemo(() => mergeClasses(CLASS, props.className), [props.className])
  const styles = useMemo(() => mergeStyles(props.style), [props.style])
  const params = useMemo(() => ({ name: props.name, data: props.data }), [props.data, props.name])
  const onChange = props.onChange
    ? event => {
        props.onChange({ nativeEvent: event, ...params, value: event.target.value })
      }
    : null
  const onClick = props.onClick
    ? event => {
        props.onClick({ nativeEvent: event, ...params })
      }
    : null
  const onKeyDown = props.onKeyDown
    ? event => {
        props.onKeyDown({ nativeEvent: event, ...params })
      }
    : null
  return (
    <input
      ref={ref}
      className={classes._}
      style={styles._}
      type={'text'}
      value={props.value || ''}
      readOnly={props.readOnly}
      placeholder={props.placeholder}
      onChange={onChange}
      onClick={onClick}
      onKeyDown={onKeyDown}
    />
  )
})

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
