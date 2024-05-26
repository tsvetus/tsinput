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

const Inline = ({
  className,
  style,
  layout = '',
  name,
  data,
  text,
  icon,
  wait,
  invalid,
  children,
  onClick,
  onTextClick,
  onIconClick
}) => {
  const isRightLabel = useMemo(() => layout.includes('right'), [layout])

  const classes = useMemo(
    () =>
      mergeClasses(
        CLASS,
        layout.includes('right') ? CLASS_RIGHT : CLASS_LEFT,
        wait ? CLASS_WAIT : null,
        invalid ? CLASS_INVALID : null,
        className
      ),
    [layout, wait, invalid, className]
  )

  const styles = useMemo(() => mergeStyles({ icon: {} }, style), [style])

  const params = useMemo(() => ({ name, data }), [data, name])

  const handleClick = onClick
    ? event => {
        onClick({ ...event, ...params })
      }
    : null

  const handleTextClick = onTextClick
    ? event => {
        onTextClick({ ...event, ...params })
      }
    : null

  const handleIconClick = onIconClick
    ? event => {
        onIconClick({ ...event, ...params })
      }
    : null

  const textComponent = text ? (
    <div className={classes.text?._} style={styles.text?._} onClick={handleTextClick}>
      {text}
    </div>
  ) : null

  const iconComponent = icon ? (
    <Icon className={classes.icon?._} style={styles.icon?._} icon={icon} onClick={handleIconClick} />
  ) : null

  return isRightLabel ? (
    <div className={classes._} style={styles._} onClick={handleClick}>
      {iconComponent}
      {children}
      {textComponent}
    </div>
  ) : (
    <div className={classes._} style={styles._} onClick={handleClick}>
      {textComponent}
      {children}
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
