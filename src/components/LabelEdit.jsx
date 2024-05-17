import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import { mergeClasses, mergeStyles } from '../util'

import Label from './Label'
import Edit from './Edit'

const LabelEdit = props => {
  const classes = useMemo(() => mergeClasses(props.className), [props.className])
  const styles = useMemo(() => mergeStyles(props.style), [props.style])
  return (
    <Label
      classnem={classes.label}
      style={styles.label}
      layout={props.labelLayout}
      name={props.name}
      data={props.data}
      text={props.label}
      icon={props.labelIcon}
      wait={props.wait}
      invalid={props.invalid}
      onTextClick={props.onLabelClick}
      onIconClick={props.onLabelIconClick}
    >
      <Edit
        classnem={classes.edit}
        style={styles.edit}
        layout={props.editLayout}
        name={props.name}
        data={props.data}
        icon={props.editIcon}
        wait={props.wait}
        invalid={props.invalid}
        placeholder={props.placeholder}
        value={props.value}
        onEditClick={props.onEditClick}
        onIconClick={props.onEditIconClick}
        onChange={props.onChange}
      >
        {props.children}
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
