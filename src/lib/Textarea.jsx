import React, { useRef, useMemo, useEffect, forwardRef } from 'react'
import PropTypes from 'prop-types'

import { mergeClasses, mergeStyles, initRefs } from '../util'

const NAME = 'tsi-textarea'

const CLASS = {
  _: NAME
}

const correctHeight = element => {
  if (element && element.scrollHeight > element.clientHeight) {
    element.style.height = `${element.scrollHeight}px`
  }
}

const Textarea = forwardRef(({ className, style, name, data, autoHeight, readOnly, value, onChange }, extRef) => {
  const intRef = useRef()
  const classes = useMemo(() => mergeClasses(CLASS, className), [className])
  const styles = useMemo(() => mergeStyles(style), [style])
  const params = useMemo(() => ({ name, data }), [name, data])
  const handleChange = event => {
    onChange?.({ ...event, ...params, value: event.target.value })
    if (autoHeight) {
      correctHeight(intRef.current)
    }
  }
  useEffect(() => {
    if (autoHeight) {
      correctHeight(intRef.current)
    }
  }, [autoHeight])
  return (
    <textarea
      ref={initRefs(intRef, extRef)}
      className={classes._}
      style={styles._}
      type={'text'}
      onChange={handleChange}
      readOnly={readOnly}
      value={value}
    />
  )
})

Textarea.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  style: PropTypes.object,
  name: PropTypes.string,
  data: PropTypes.any,
  value: PropTypes.string,
  readOnly: PropTypes.any,
  autoHeight: PropTypes.any,
  onChange: PropTypes.func
}

Textarea.displayName = 'Textarea'

export default Textarea
