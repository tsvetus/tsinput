import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import { mergeClasses, mergeStyles } from '../util'

const NAME = 'tsi-menu-item'

const CLASS = {
  _: NAME
}

const MenuItem = ({ className, style, name, data, value, children, onClick, onKeyDown }) => {
  const classes = useMemo(() => mergeClasses(CLASS, className), [className])
  const styles = useMemo(() => mergeStyles(style), [style])
  const params = useMemo(() => ({ name, data, value }), [data, name, value])
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
    <div className={classes._} style={styles._} onClick={handleClick} onKeyDown={handleKeyDown}>
      {children}
    </div>
  )
}

MenuItem.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  style: PropTypes.object,
  name: PropTypes.string,
  data: PropTypes.any,
  value: PropTypes.any,
  children: PropTypes.any,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func
}

export default MenuItem
