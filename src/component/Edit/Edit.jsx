import React, { useMemo, useRef, useCallback } from 'react'
import PropTypes from 'prop-types'

import Input from '../../lib/Input'
import Icon from '../../lib/Icon'

import { concat } from '../../util'

import './Edit.css'

const CLASS = 'tsi-edit'

const Edit = props => {
  const containerClassName = useMemo(() => {
    const classes = [`${CLASS}-container`]
    if (props.layout && props.layout.includes('top')) classes.push(`${CLASS}-container-column`)
    if (1 === classes.length) classes.push(`${CLASS}-container-inline`)
    return concat(...classes, props.className)
  }, [props.className])

  const labelClassName = useMemo(() => {
    if (!props.label) return null
    const classes = [`${CLASS}-label`]
    if (props.layout && props.layout.includes('top')) {
      if (props.layout.includes('left')) classes.push(`${CLASS}-label-top-left`)
      if (props.layout.includes('right')) classes.push(`${CLASS}-label-top-right`)
    }
    if (1 === classes.length) classes.push(`${CLASS}-label-inline`)
    if (props.invalid) classes.push(`${CLASS}-label-invalid`)
    if (props.wait) classes.push(`${CLASS}-label-wait`)
    return concat(...classes)
  }, [props.label, props.layout, props.invalid, props.wait])

  const editClassName = useMemo(() => {
    if (!props.label) return null
    const classes = [CLASS]
    if (props.invalid) classes.push(`${CLASS}-invalid`)
    if (props.wait) classes.push(`${CLASS}-wait`)
    return concat(...classes)
  }, [props.invalid, props.wait])

  const readOnly = useMemo(() => props.readOnly || props.wait, [props.readOnly, props.wait])

  const inputRef = useRef()
  const editRef = useRef()

  const onChangeRef = useRef()
  onChangeRef.current = props.onChange
  const onChange = useCallback(
    event => {
      if (!readOnly && onChangeRef.current) onChangeRef.current({ ...event, name: props.name, data: props.data })
    },
    [readOnly, props.name]
  )

  const onIconClickRef = useRef()
  onIconClickRef.current = props.onIconClick
  const onIconClick = useCallback(
    event => {
      if (!readOnly && onIconClickRef.current) onIconClickRef.current({ ...event, name: props.name, data: props.data })
    },
    [readOnly, props.name]
  )

  return (
    <div className={containerClassName}>
      {props.label ? <div className={labelClassName}>{props.label}</div> : null}
      <div ref={editRef} className={editClassName}>
        <Input
          ref={inputRef}
          className={`${CLASS}-input`}
          value={props.value}
          readOnly={readOnly}
          onChange={onChange}
        />
        {props.showIcon && props.icon ? (
          <Icon
            className={`${CLASS}-icon`}
            icon={props.icon}
            margin={[2, 2, 2, 0]}
            onTarget={() => editRef.current}
            onClick={onIconClick}
          />
        ) : null}
      </div>
    </div>
  )
}

Edit.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  data: PropTypes.any,
  label: PropTypes.any,
  value: PropTypes.string,
  showIcon: PropTypes.any,
  icon: PropTypes.any,
  layout: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  wait: PropTypes.any,
  invalid: PropTypes.any,
  readOnly: PropTypes.any,
  onChange: PropTypes.func,
  onIconClick: PropTypes.func
}

Edit.defaultProps = {
  showIcon: true
}

export default Edit
