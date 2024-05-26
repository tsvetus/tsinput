import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import Label from './Label'

const CheckBox = ({
  className,
  style,
  layout,
  name,
  data,
  label,
  radio = false,
  wait,
  invalid,
  value,
  valueChecked = true,
  valueUnchecked = false,
  events = 'text icon',
  onChange
}) => {
  const iconSet = useMemo(() => (radio ? ['unselected', 'selected'] : ['unchecked', 'checked']), [radio])

  const icon = useMemo(() => (value == valueChecked ? iconSet[1] : iconSet[0]), [iconSet, value, valueChecked])

  const handleChange = event => {
    if (onChange) {
      const value = value == valueChecked ? valueUnchecked : valueChecked
      onChange({ ...event, value })
    }
  }

  const handleTextClick = event => {
    if (events.includes('text') || events.includes('label')) {
      handleChange(event)
    }
  }

  const handleIconClick = event => {
    if (events.includes('icon')) {
      handleChange(event)
    }
  }

  return (
    <Label
      className={className}
      style={style}
      layout={layout}
      name={name}
      data={data}
      text={label}
      icon={icon}
      wait={wait}
      invalid={invalid}
      onTextClick={handleTextClick}
      onIconClick={handleIconClick}
    />
  )
}

CheckBox.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  style: PropTypes.object,
  layout: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  name: PropTypes.string,
  data: PropTypes.any,
  label: PropTypes.any,
  radio: PropTypes.any,
  wait: PropTypes.any,
  invalid: PropTypes.any,
  value: PropTypes.any,
  valueChecked: PropTypes.any,
  valueUnchecked: PropTypes.any,
  events: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  onChange: PropTypes.func
}

export default CheckBox
