import React, { useMemo, forwardRef } from 'react'
import PropTypes from 'prop-types'

import { mergeClasses, mergeStyles } from '../util'

const NAME = 'tsi-textarea'

const CLASS = {
  _: NAME
}

const Textarea = forwardRef((props, ref) => {
  const classes = useMemo(() => mergeClasses(CLASS, props.className), [props.className])
  const styles = useMemo(() => mergeStyles(props.style), [props.style])
  const params = useMemo(() => ({ name: props.name, data: props.data }), [props.data, props.name])
  const onChange = props.onChange
    ? event => {
        props.onChange({ nativeEvent: event, ...params, value: event.target.value })
      }
    : null
  return (
    <textarea
      ref={ref}
      className={classes._}
      style={styles._}
      type={'text'}
      onChange={onChange}
      readOnly={props.readOnly}
    >
      {props.value}
    </textarea>
  )
})

Textarea.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  style: PropTypes.object,
  name: PropTypes.string,
  data: PropTypes.any,
  value: PropTypes.string,
  readOnly: PropTypes.any,
  onChange: PropTypes.func
}

Textarea.displayName = 'Textarea'

export default Textarea
