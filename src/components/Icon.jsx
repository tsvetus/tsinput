import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import { mergeClasses, mergeStyles } from '../util'

const NAME = 'tsi-icon'

const Icon = props => {
  const icon = props.icon || null
  const clickable = Boolean(props.onClick)

  const classes = useMemo(
    () =>
      mergeClasses(
        props.baseClass || NAME,
        icon ? `${NAME}-${icon}` : null,
        clickable ? `${NAME}-clickable` : null,
        props.className
      ),
    [props.baseClass, props.className, icon, clickable]
  )

  const styles = useMemo(() => mergeStyles(props.style), [props.style])

  const params = useMemo(() => ({ name: props.name, data: props.data }), [props.data, props.name])

  const onClick = props.onClick
    ? event => {
        props.onClick({ ...event, ...params, icon: props.icon })
      }
    : null

  return icon && styles ? <i className={classes._} style={styles._} onClick={onClick} /> : null
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
