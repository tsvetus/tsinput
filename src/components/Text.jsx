import React, { useMemo, forwardRef } from 'react'
import PropTypes from 'prop-types'

import Textarea from '../lib/Textarea'

import { mergeClasses, mergeStyles } from '../util'

const NAME = 'tsi-text'

const CLASS = {
  _: NAME
}

const CLASS_INVALID = {
  _: `${NAME}-invalid`
}

const CLASS_WAIT = {
  _: `${NAME}-wait`
}

const Text = forwardRef((props, ref) => {
  const classes = useMemo(
    () => mergeClasses(CLASS, props.wait ? CLASS_WAIT : null, props.invalid ? CLASS_INVALID : null, props.className),
    [props.wait, props.invalid, props.className]
  )

  const styles = useMemo(() => mergeStyles(props.style), [props.style])

  const params = useMemo(() => ({ name: props.name, data: props.data }), [props.data, props.name])

  const isReadOnly = useMemo(() => props.readOnly || props.wait, [props.readOnly, props.wait])

  const onChange = props.onChange
    ? event => {
        if (!isReadOnly) props.onChange({ ...event, ...params })
      }
    : null

  const onClick = props.onClick
    ? event => {
        props.onClick({ ...event, ...params })
      }
    : null

  return (
    <Textarea
      ref={ref}
      className={classes._}
      style={styles._}
      value={props.value}
      placeholder={props.placeholder}
      readOnly={isReadOnly}
      onChange={onChange}
      onClick={onClick}
    />
  )
})

Text.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  style: PropTypes.object,
  name: PropTypes.string,
  data: PropTypes.any,
  value: PropTypes.string,
  wait: PropTypes.any,
  invalid: PropTypes.any,
  readOnly: PropTypes.any,
  placeholder: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func
}

Text.displayName = 'Text'

export default Text
