import React, { useMemo, useRef, MouseEvent, useEffect } from 'react'

import Label from '../Label'

import { LabelCheckBoxProps } from './types'

import { mergeClasses } from '../../util'

const CLASS = 'tsi-check-box'

const LabelCheckBox = ({
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
}: LabelCheckBoxProps) => {
  const ref = useRef<HTMLDivElement>(null)

  const classes = useMemo(() => mergeClasses(CLASS, className), [className])

  const iconSet = useMemo(() => (radio ? ['unselected', 'selected'] : ['unchecked', 'checked']), [radio])

  const icon = useMemo(() => (value == valueChecked ? iconSet[1] : iconSet[0]), [iconSet, value, valueChecked])

  const handleChange = (event: MouseEvent<HTMLElement>) => {
    if (onChange) {
      onChange({ ...event, value: value == valueChecked ? valueUnchecked : valueChecked })
    }
  }

  const handleTextClick = (event: MouseEvent<HTMLDivElement>) => {
    if (events.includes('text') || events.includes('label')) {
      handleChange(event)
    }
  }

  const handleIconClick = (event: MouseEvent<HTMLElement>) => {
    if (events.includes('icon')) {
      handleChange(event)
    }
  }

  useEffect(() => {
    if (ref.current?.parentNode) {
      const siblings = Array.from(ref.current.parentNode.children).filter(
        c => c.nodeType === 1 && c !== ref.current && c.classList?.contains(CLASS)
      )
      console.log(siblings)
    }
  }, [])

  return (
    <Label
      ref={ref}
      className={classes}
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

export default LabelCheckBox
