import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import { mergeClasses, mergeStyles, selectItems } from '../util'

import Label from './Label'
import Text from './Text'

const LabelText = ({
  className,
  style,
  layout,
  name,
  data,
  label,
  icon,
  wait,
  invalid,
  placeholder,
  value,
  autoHeight,
  onLabelClick,
  onIconClick,
  onChange
}) => {
  const layoutLabel = useMemo(() => selectItems(layout, ['top', 'border', 'right'], ['top']), [layout])
  const classes = useMemo(() => mergeClasses(className), [className])
  const classesLabel = useMemo(() => mergeClasses(classes._, classes.label), [classes])
  const styles = useMemo(() => mergeStyles(style), [style])
  return (
    <Label
      className={classesLabel}
      style={styles.label}
      layout={layoutLabel}
      name={name}
      data={data}
      text={label}
      icon={icon}
      wait={wait}
      invalid={invalid}
      onTextClick={onLabelClick}
      onIconClick={onIconClick}
    >
      <Text
        className={classes.text}
        style={styles.text}
        name={name}
        data={data}
        wait={wait}
        invalid={invalid}
        placeholder={placeholder}
        value={value}
        autoHeight={autoHeight}
        onChange={onChange}
      />
    </Label>
  )
}

LabelText.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  style: PropTypes.object,
  layout: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  name: PropTypes.string,
  data: PropTypes.any,
  label: PropTypes.any,
  icon: PropTypes.any,
  wait: PropTypes.any,
  invalid: PropTypes.any,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  autoHeight: PropTypes.any,
  onLabelClick: PropTypes.func,
  onIconClick: PropTypes.func,
  onChange: PropTypes.func
}

export default LabelText
