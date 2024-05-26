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

const Text = forwardRef(
  (
    { className, style, name, data, value, placeholder, readOnly, wait, invalid, autoHeight, onChange, onClick },
    ref
  ) => {
    const classes = useMemo(
      () => mergeClasses(CLASS, wait ? CLASS_WAIT : null, invalid ? CLASS_INVALID : null, className),
      [wait, invalid, className]
    )

    const styles = useMemo(() => mergeStyles(style), [style])

    const params = useMemo(() => ({ name, data }), [data, name])

    const isReadOnly = useMemo(() => readOnly || wait, [readOnly, wait])

    const handleChange = onChange
      ? event => {
          if (!isReadOnly) {
            onChange({ ...event, ...params })
          }
        }
      : null

    const handleClick = onClick
      ? event => {
          onClick({ ...event, ...params })
        }
      : null

    return (
      <Textarea
        ref={ref}
        className={classes._}
        style={styles._}
        value={value}
        placeholder={placeholder}
        readOnly={isReadOnly}
        autoHeight={autoHeight}
        onChange={handleChange}
        onClick={handleClick}
      />
    )
  }
)

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
  autoHeight: PropTypes.any,
  onClick: PropTypes.func,
  onChange: PropTypes.func
}

Text.displayName = 'Text'

export default Text
