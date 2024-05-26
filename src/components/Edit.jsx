import React, { useMemo, forwardRef } from 'react'
import PropTypes from 'prop-types'

import Input from '../lib/Input'

import Icon from './Icon'

import { mergeClasses, mergeStyles } from '../util'

const NAME = 'tsi-edit'

const CLASS = {
  _: NAME,
  input: `${NAME}-input`,
  icon: `${NAME}-icon`
}

const CLASS_LEFT = {
  icon: `${NAME}-icon-right`
}

const CLASS_RIGHT = {
  icon: `${NAME}-icon-left`
}

const CLASS_INVALID = {
  _: `${NAME}-invalid`,
  input: `${NAME}-input-invalid`,
  icon: `${NAME}-icon-invalid`
}

const CLASS_WAIT = {
  _: `${NAME}-wait`,
  input: `${NAME}-input-wait`,
  icon: `${NAME}-icon-wait`
}

const Edit = forwardRef(
  (
    {
      className,
      style,
      layout = '',
      name,
      data,
      value,
      icon,
      wait,
      invalid,
      readOnly,
      placeholder,
      children,
      onClick,
      onEditClick,
      onIconClick,
      onChange,
      onKeyDown
    },
    ref
  ) => {
    const isRightInput = useMemo(() => layout.includes('right'), [layout])

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

    const handleInputClick = onEditClick
      ? event => {
          onEditClick({ ...event, ...params })
        }
      : null

    const handleIconClick = onIconClick
      ? event => {
          onIconClick({ ...event, ...params })
        }
      : null

    const iconComponent = icon ? (
      <Icon className={classes.icon?._} style={styles.icon?._} icon={icon} onClick={handleIconClick} />
    ) : null

    const inputComponent = (
      <Input
        className={classes.input?._}
        style={styles.input?._}
        value={value}
        placeholder={placeholder}
        readOnly={isReadOnly}
        name={name}
        data={data}
        onChange={handleChange}
        onClick={handleInputClick}
        onKeyDown={onKeyDown}
      />
    )

    return isRightInput ? (
      <div ref={ref} className={classes._} style={styles._} onClick={handleClick}>
        {iconComponent}
        {inputComponent}
        {children}
      </div>
    ) : (
      <div ref={ref} className={classes._} style={styles._} onClick={handleClick}>
        {inputComponent}
        {iconComponent}
        {children}
      </div>
    )
  }
)

Edit.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  style: PropTypes.object,
  layout: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  name: PropTypes.string,
  data: PropTypes.any,
  value: PropTypes.string,
  icon: PropTypes.any,
  wait: PropTypes.any,
  invalid: PropTypes.any,
  readOnly: PropTypes.any,
  placeholder: PropTypes.string,
  children: PropTypes.any,
  onClick: PropTypes.func,
  onEditClick: PropTypes.func,
  onIconClick: PropTypes.func,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func
}

Edit.displayName = 'Edit'

export default Edit
