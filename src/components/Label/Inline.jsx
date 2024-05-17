import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon'

import { mergeClasses, mergeStyles } from '../../util'

const NAME = 'tsi-label'

const CLASS = {
  _: `${NAME} ${NAME}-inline`,
  text: `${NAME}-text`,
  icon: `${NAME}-icon`
}

const CLASS_LEFT = {
  text: `${NAME}-text-left`,
  icon: `${NAME}-icon-right`
}

const CLASS_RIGHT = {
  text: `${NAME}-text-right`,
  icon: `${NAME}-icon-left`
}

const CLASS_INVALID = {
  text: `${NAME}-text-invalid`,
  icon: `${NAME}-icon-invalid`
}

const CLASS_WAIT = {
  text: `${NAME}-text-wait`,
  icon: `${NAME}-icon-wait`
}

const Inline = props => {
  const layout = useMemo(
    () => (props.layout ? (Array.isArray(props.layout) ? props.layout : props.layout.split(' ')) : []),
    [props.layout]
  )

  const isRightLabel = useMemo(() => layout.includes('right'), [layout])

  const classes = useMemo(
    () =>
      mergeClasses(
        CLASS,
        layout.includes('right') ? CLASS_RIGHT : CLASS_LEFT,
        props.wait ? CLASS_WAIT : null,
        props.invalid ? CLASS_INVALID : null,
        props.className
      ),
    [layout, props.wait, props.invalid, props.className]
  )

  const styles = useMemo(() => mergeStyles({ icon: {} }, props.style), [props.style])

  const params = useMemo(() => ({ name: props.name, data: props.data }), [props.data, props.name])

  const onClick = props.onClick
    ? event => {
        props.onClick({ nativeEvent: event, ...params })
      }
    : null

  const onTextClick = props.onTextClick
    ? event => {
        props.onTextClick({ nativeEvent: event, ...params })
      }
    : null

  const onIconClick = props.onIconClick
    ? event => {
        props.onIconClick({ ...event, ...params })
      }
    : null

  const textComponent = props.text ? (
    <div className={classes.text?._} style={styles.text?._} onClick={onTextClick}>
      {props.text}
    </div>
  ) : null

  const iconComponent = props.icon ? (
    <Icon className={classes.icon?._} style={styles.icon?._} icon={props.icon} onClick={onIconClick} />
  ) : null

  return isRightLabel ? (
    <div className={classes._} style={styles._} onClick={onClick}>
      {iconComponent}
      {props.children}
      {textComponent}
    </div>
  ) : (
    <div className={classes._} style={styles._} onClick={onClick}>
      {textComponent}
      {props.children}
      {iconComponent}
    </div>
  )
}

Inline.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  style: PropTypes.object,
  layout: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  name: PropTypes.string,
  data: PropTypes.any,
  text: PropTypes.any,
  icon: PropTypes.any,
  wait: PropTypes.any,
  invalid: PropTypes.any,
  children: PropTypes.any,
  onClick: PropTypes.func,
  onTextClick: PropTypes.func,
  onIconClick: PropTypes.func
}

export default Inline
