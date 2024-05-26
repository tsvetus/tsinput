import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import { mergeClasses, mergeStyles } from '../util'

const NAME = 'tsi-icon'

const Icon = ({ className, style, icon, name, data, baseClass = NAME, onClick }) => {
  const clickable = Boolean(onClick)

  const classes = useMemo(
    () =>
      mergeClasses(
        baseClass || NAME,
        icon ? `${NAME}-${icon}` : null,
        clickable ? `${NAME}-clickable` : null,
        className
      ),
    [baseClass, className, icon, clickable]
  )

  const styles = useMemo(() => mergeStyles(style), [style])

  const params = useMemo(() => ({ name, data, value: icon, icon }), [icon, data, name])

  const handleClick = onClick
    ? event => {
        onClick({ ...event, ...params })
      }
    : null

  return <i className={classes._} style={styles._} onClick={handleClick} />
}

Icon.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  style: PropTypes.object,
  icon: PropTypes.any,
  name: PropTypes.string,
  data: PropTypes.any,
  baseClass: PropTypes.string,
  onClick: PropTypes.func
}

Icon.defaultProps = {
  baseClass: NAME
}

export default Icon
