import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import { mergeClasses, mergeStyles } from '../util'

const NAME = 'tsi-group'

const CLASS = {
  _: NAME,
  label: `${NAME}-label`
}

const CLASS_LEFT = {
  label: `${NAME}-label-left`
}

const CLASS_RIGHT = {
  _: NAME,
  label: `${NAME}-label-right`
}

const Icon = props => {
  const layout = useMemo(() => props.layout || [], [props.layout])
  const classes = useMemo(
    () => mergeClasses(CLASS, props.className, layout.includes('right') ? CLASS_RIGHT : CLASS_LEFT),
    [layout, props.className]
  )
  const styles = useMemo(() => mergeStyles(props.style), [props.style])
  const params = useMemo(() => ({ name: props.name, data: props.data }), [props.data, props.name])
  const onClick = props.onClick
    ? event => {
        props.onClick({ ...event, ...params })
      }
    : null
  const onKeyDown = props.onClick
    ? event => {
        props.onKeyDown({ ...event, ...params })
      }
    : null
  return (
    <div className={classes._} style={styles._} onClick={onClick} onKeyDown={onKeyDown}>
      <div className={classes.label?._} style={styles.label?._}>
        {props.label}
      </div>
      {props.children}
    </div>
  )
}

Icon.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  style: PropTypes.object,
  layout: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  label: PropTypes.any,
  name: PropTypes.string,
  data: PropTypes.any,
  children: PropTypes.any,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func
}

export default Icon
