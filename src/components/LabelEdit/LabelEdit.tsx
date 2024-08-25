import React, { useMemo } from 'react'

import { mergeClasses, mergeStyles } from '../../util'

import Label from '../Label'
import Edit from '../Edit'

import { LabelEditProps } from './types'

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
  onLabelIconClick,
  onEditClick,
  onEditIconClick,
  onInputClick,
  onInputKeyDown,
  onChange
}: LabelEditProps) => {
  const classes = useMemo(() => mergeClasses(className), [className])
  const styles = useMemo(() => mergeStyles(style), [style])
  const labelClass = useMemo(() => mergeClasses(classes.label, classes._), [classes])
  const labelStyle = useMemo(() => mergeStyles(styles.label, styles._), [styles])
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
      onClick={onLabelClick}
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
        onClick={onEditClick}
        onIconClick={onEditIconClick}
        onInputClick={onInputClick}
        onInputKeyDown={onInputKeyDown}
        onChange={onChange}
      >
        {children}
      </Edit>
    </Label>
  )
}

export default LabelEdit
