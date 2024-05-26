import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon'

import { mergeClasses, mergeStyles } from '../../util'

const NAME = 'tsi-label'

const CLASS = {
  _: `${NAME} ${NAME}-column`,
  header: `${NAME}-header`,
  text: `${NAME}-text ${NAME}-text-top`,
  icon: `${NAME}-icon ${NAME}-icon-top`
}

const CLASS_BORDER = {
  header: `${NAME}-header-border`,
  text: `${NAME}-text-border`,
  icon: `${NAME}-icon-border`
}

const CLASS_INVALID = {
  text: `${NAME}-text-invalid`,
  icon: `${NAME}-icon-invalid`
}

const CLASS_WAIT = {
  text: `${NAME}-text-wait`,
  icon: `${NAME}-icon-wait`
}

const Column = ({
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
  const isBorder = useMemo(() => layout.includes('border'), [layout])

  const classes = useMemo(
    () =>
      mergeClasses(
        CLASS,
        isBorder ? CLASS_BORDER : null,
        wait ? CLASS_WAIT : null,
        invalid ? CLASS_INVALID : null,
        className
      ),
    [isBorder, wait, invalid, className]
  )

  const styles = useMemo(() => mergeStyles(style), [style])

  const params = useMemo(() => ({ name, data }), [data, name])

  const handleClick = onClick
    ? event => {
        if (!wait) {
          onClick({ ...event, ...params })
        }
      }
    : null

  const handleTextClick = onTextClick
    ? event => {
        if (!wait) {
          onTextClick({ ...event, ...params })
        }
      }
    : null

  const handleIconClick = onIconClick
    ? event => {
        if (!wait) {
          onIconClick({ ...event, ...params })
        }
      }
    : null

  const textComponent = text ? (
    <div className={classes.text?._} style={styles.text?._} onClick={handleTextClick}>
      {text}
    </div>
  ) : (
    <div />
  )

  const iconComponent = icon ? (
    <Icon className={classes.icon?._} style={styles.icon?._} icon={icon} onClick={handleIconClick} />
  ) : (
    <div />
  )

  const headerComponent = isRightLabel ? (
    <div className={classes.header?._} style={styles.header?._}>
      {iconComponent}
      {textComponent}
    </div>
  ) : (
    <div className={classes.header?._} style={styles.header?._}>
      {textComponent}
      {iconComponent}
    </div>
  )

  return (
    <div className={classes._} style={styles._} onClick={handleClick}>
      {headerComponent}
      {children}
    </div>
  )
}

Column.propTypes = {
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

export default Column
