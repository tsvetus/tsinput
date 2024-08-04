import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import { mergeClasses, mergeStyles } from '../util'

import Label from './Label'
import Edit from './Edit'

const LabelEdit = ({
  className,
  style,
  labelLayout,
  editLayout,
  name,
  data,
  label,
  labelIcon,
  editIcon,
  wait,
  invalid,
  placeholder,
  children,
  value,
  onLabelClick,
  onEditClick,
  onLabelIconClick,
  onEditIconClick,
  onChange
}) => {
  const classes = useMemo(() => mergeClasses(className), [className])
  const styles = useMemo(() => mergeStyles(style), [style])
  const labelClass = useMemo(() => mergeClasses(classes.label, classes._), [classes])
  const labelStyle = useMemo(() => mergeClasses(styles.label, styles._), [styles])
  return (
    <Label
      className={labelClass}
      style={labelStyle}
      layout={labelLayout}
      name={name}
      data={data}
      text={label}
      icon={labelIcon}
      wait={wait}
      invalid={invalid}
      onTextClick={onLabelClick}
      onIconClick={onLabelIconClick}
    >
      <Edit
        className={classes.edit}
        style={styles.edit}
        layout={editLayout}
        name={name}
        data={data}
        icon={editIcon}
        wait={wait}
        invalid={invalid}
        placeholder={placeholder}
        value={value}
        onEditClick={onEditClick}
        onIconClick={onEditIconClick}
        onChange={onChange}
      >
        {children}
      </Edit>
    </Label>
  )
}

LabelEdit.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  style: PropTypes.object,
  labelLayout: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  editLayout: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  name: PropTypes.string,
  data: PropTypes.any,
  label: PropTypes.any,
  labelIcon: PropTypes.any,
  editIcon: PropTypes.any,
  wait: PropTypes.any,
  invalid: PropTypes.any,
  placeholder: PropTypes.string,
  children: PropTypes.any,
  value: PropTypes.string,
  onLabelClick: PropTypes.func,
  onEditClick: PropTypes.func,
  onLabelIconClick: PropTypes.func,
  onEditIconClick: PropTypes.func,
  onChange: PropTypes.func
}

export default LabelEdit
