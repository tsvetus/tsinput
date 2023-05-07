import React, { useMemo, useRef, forwardRef } from 'react'
import PropTypes from 'prop-types'

import Input from '../../lib/Input'
import Icon from '../../lib/Icon'

import { concat } from '../../util'

import '../../styles/edit.css'
import './Edit.css'

const CLASS = 'tsi-edit'

const getLayout = (label, labelLayout, icon, iconLayout, showIcon) => {
  const result = {
    label: {
      show: Boolean(label),
      top: Boolean((labelLayout || '').includes('top')),
      left: !(labelLayout || '').includes('right')
    },
    icon: {
      show: Boolean(icon && showIcon),
      top: Boolean((iconLayout || '').includes('top')),
      left: Boolean((iconLayout || '').includes('left'))
    }
  }
  result.label.right = !result.label.left
  if (result.label.top && result.icon.top && result.label.left === result.icon.left)
    result.icon.left = !result.icon.left
  result.icon.right = !result.icon.left
  return result
}

const getPosition = layout => `${layout.top ? '-top' : ''}${layout.left ? '-left' : '-right'}`

const getClasses = (className, classes, layout) => {
  const result = {
    container: `${CLASS}-container`,
    frame: concat(`${CLASS}-frame`, classes?.frame),
    input: concat(`${CLASS}-input`, classes?.input)
  }
  if ((layout.label.show && layout.label.top) || (layout.icon.show && layout.icon.top)) {
    result.header = concat(`${CLASS}-header`, classes?.header)
    result.container = `${result.container} ${CLASS}-container-column`
    result.frame = `${result.frame} ${CLASS}-frame-column`
  } else {
    result.container = `${result.container} ${CLASS}-container-inline`
    result.frame = `${result.frame} ${CLASS}-frame-inline`
  }
  result.container = concat(result.container, className, classes?.container)
  if (layout.label.show)
    result.label = concat(`${CLASS}-label`, `${CLASS}-label${getPosition(layout.label)}`, classes?.label)
  if (layout.icon.show) result.icon = concat(`${CLASS}-icon`, `${CLASS}-icon${getPosition(layout.icon)}`, classes?.icon)
  return result
}

const getStyles = (style, styles) => ({ ...styles, container: { ...style, ...styles?.container } })

const Edit = forwardRef((props, ref) => {
  const layout = useMemo(
    () => getLayout(props.label, props.layout, props.icon, props.iconPosition, props.showIcon),
    [props.icon, props.iconPosition, props.label, props.layout, props.showIcon]
  )

  const classes = useMemo(
    () => getClasses(props.className, props.classes, layout),
    [layout, props.className, props.classes]
  )

  const styles = useMemo(() => getStyles(props.style, props.styles), [props.style, props.styles])

  const readOnly = useMemo(() => props.readOnly || props.wait, [props.readOnly, props.wait])

  const inputRef = useRef()
  const editRef = useRef()

  const onChange = props.onChange
    ? event => {
        if (!readOnly) props.onChange({ ...event, name: props.name, data: props.data })
      }
    : null

  const onClick = props.onClick ? event => props.onClick({ ...event, name: props.name, data: props.data }) : null

  const onLabelClick = props.onLabelClick
    ? event => props.onLabelClick({ nativeEvent: event, name: props.name, data: props.data })
    : null

  const onInputClick = props.onEditClick
    ? event => props.onEditClick({ ...event, name: props.name, data: props.data })
    : null

  const onDivClick = props.onEditClick
    ? event => props.onEditClick({ nativeEvent: event, name: props.name, data: props.data })
    : null

  const onIconClick = props.onIconClick
    ? event => props.onIconClick({ ...event, name: props.name, data: props.data })
    : null

  const labelComponent = layout.label.show ? (
    <div className={classes.label} style={styles.label} onClick={onLabelClick}>
      {props.label}
    </div>
  ) : null

  if ('edit4' === props.name) console.log(layout, classes, styles)

  const iconComponent = layout.icon.show ? (
    <Icon
      className={classes.icon}
      style={styles.icon}
      icon={props.icon}
      onTarget={() => editRef.current}
      onClick={onIconClick}
    />
  ) : null

  const inputComponent = props.readOnly ? (
    <div ref={inputRef} className={classes.input} style={styles.input} onClick={onDivClick}>
      {props.value}
    </div>
  ) : (
    <Input
      ref={inputRef}
      className={classes.input}
      style={styles.input}
      value={props.value}
      readOnly={readOnly}
      onChange={onChange}
      onClick={onInputClick}
    />
  )

  const headerComponent = classes.header ? (
    <div className={classes.header} style={styles.header}>
      {layout.label.left ? (
        <>
          {labelComponent || <div></div>} {iconComponent || <div></div>}
        </>
      ) : (
        <>
          {iconComponent || <div></div>} {labelComponent || <div></div>}
        </>
      )}
    </div>
  ) : (
    labelComponent
  )

  const frameComponent = (
    <div className={classes.frame} style={styles.frame}>
      {layout.icon.left ? (
        <>
          {layout.icon.top ? null : iconComponent} {inputComponent}
        </>
      ) : (
        <>
          {inputComponent} {layout.icon.top ? null : iconComponent}
        </>
      )}
    </div>
  )

  return (
    <div ref={ref} className={classes.container} style={styles.container} onClick={onClick}>
      {!layout.label.top && !layout.label.left ? (
        <>
          {frameComponent}
          {headerComponent}
        </>
      ) : (
        <>
          {headerComponent}
          {frameComponent}
        </>
      )}
      {props.children}
    </div>
  )
})

Edit.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  style: PropTypes.object,
  styles: PropTypes.object,
  name: PropTypes.string,
  data: PropTypes.any,
  label: PropTypes.any,
  layout: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  value: PropTypes.string,
  showIcon: PropTypes.any,
  icon: PropTypes.any,
  iconPosition: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  wait: PropTypes.any,
  invalid: PropTypes.any,
  readOnly: PropTypes.any,
  children: PropTypes.any,
  onClick: PropTypes.func,
  onLabelClick: PropTypes.func,
  onEditClick: PropTypes.func,
  onIconClick: PropTypes.func,
  onChange: PropTypes.func
}

Edit.defaultProps = {
  showIcon: true
}

Edit.displayName = 'Edit'

export default Edit
