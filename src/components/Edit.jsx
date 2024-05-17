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

const Edit = forwardRef((props, ref) => {
  const layout = useMemo(
    () => (props.layout ? (Array.isArray(props.layout) ? props.layout : props.layout.split(' ')) : []),
    [props.layout]
  )

  const isRightInput = useMemo(() => layout.includes('right'), [layout])

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

  const styles = useMemo(() => mergeStyles(props.style), [props.style])

  const params = useMemo(() => ({ name: props.name, data: props.data }), [props.data, props.name])

  const isReadOnly = useMemo(() => props.readOnly || props.wait, [props.readOnly, props.wait])

  const onChange = props.onChange
    ? event => {
        if (!isReadOnly) props.onChange({ ...event, ...params })
      }
    : null

  const onClick = props.onClick
    ? event => {
        props.onClick({ ...event, ...params })
      }
    : null

  const onInputClick = props.onEditClick
    ? event => {
        props.onEditClick({ ...event, ...params })
      }
    : null

  const onIconClick = props.onIconClick
    ? event => {
        props.onIconClick({ ...event, ...params })
      }
    : null

  const iconComponent = props.icon ? (
    <Icon className={classes.icon?._} style={styles.icon?._} icon={props.icon} onClick={onIconClick} />
  ) : null

  const inputComponent = (
    <Input
      className={classes.input?._}
      style={styles.input?._}
      value={props.value}
      placeholder={props.placeholder}
      readOnly={isReadOnly}
      name={props.name}
      data={props.data}
      onChange={onChange}
      onClick={onInputClick}
      onKeyDown={props.onKeyDown}
    />
  )

  return isRightInput ? (
    <div ref={ref} className={classes._} style={styles._} onClick={onClick}>
      {iconComponent}
      {inputComponent}
      {props.children}
    </div>
  ) : (
    <div ref={ref} className={classes._} style={styles._} onClick={onClick}>
      {inputComponent}
      {iconComponent}
      {props.children}
    </div>
  )
})

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
