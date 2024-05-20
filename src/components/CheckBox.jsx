import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import Label from './Label'

const CheckBox = props => {
  const iconSet = useMemo(() => (props.radio ? ['unselected', 'selected'] : ['unchecked', 'checked']), [props.radio])
  const icon = useMemo(
    () => (props.value == props.valueChecked ? iconSet[1] : iconSet[0]),
    [iconSet, props.value, props.valueChecked]
  )
  const events = useMemo(() => props.events || [], [props.events])

  console.log('========================', icon)

  const onChange = event => {
    if (props.onChange) {
      const value = props.value == props.valueChecked ? props.valueUnchecked : props.valueChecked
      props.onChange({ ...event, value })
    }
  }

  const onTextClick = event => {
    if (events.includes('text') || events.includes('label')) {
      onChange(event)
    }
  }

  const onIconClick = event => {
    if (events.includes('icon')) {
      onChange(event)
    }
  }

  return (
    <Label
      className={props.className}
      style={props.style}
      layout={props.layout}
      name={props.name}
      data={props.data}
      text={props.text}
      icon={icon}
      wait={props.wait}
      invalid={props.invalid}
      onTextClick={onTextClick}
      onIconClick={onIconClick}
    />
  )
}

CheckBox.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  style: PropTypes.object,
  layout: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  name: PropTypes.string,
  data: PropTypes.any,
  text: PropTypes.any,
  radio: PropTypes.any,
  wait: PropTypes.any,
  invalid: PropTypes.any,
  value: PropTypes.any,
  valueChecked: PropTypes.any,
  valueUnchecked: PropTypes.any,
  events: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  onChange: PropTypes.func
}

CheckBox.defaultProps = {
  radio: false,
  valueChecked: true,
  valueUnchecked: false,
  events: ['text', 'icon']
}

export default CheckBox
