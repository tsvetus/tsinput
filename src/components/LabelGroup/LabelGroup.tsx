import React, { useMemo } from 'react'

import { mergeClasses, mergeStyles } from '../../util'

import Group from '../Group'
import Label from '../Label'

import { LabelGroupProps } from './types'

const LABEL_DEFAULT = { layout: 'border' }

const LabelGroup = ({
  className,
  style,
  name,
  data,
  wait,
  invalid,
  label = LABEL_DEFAULT,
  group,
  children
}: LabelGroupProps) => {
  // Restructure classes and styles
  const classes = useMemo(() => mergeClasses(className), [className])
  const styles = useMemo(() => mergeStyles(style), [style])

  // Construct props for Label component
  // Use root classes and styles for Label component
  const labelProps = useMemo(() => {
    const labelClass = mergeClasses(classes?._, classes?.label)
    const labelStyle = mergeClasses(styles?._, styles?.label)
    return { ...LABEL_DEFAULT, className: labelClass, style: labelStyle, name, data, wait, invalid, ...label }
  }, [classes, styles, name, data, wait, invalid, label])

  // Construct props for Group component
  const groupProps = useMemo(() => {
    return { className: classes?.group, style: styles?.group, name, data, wait, invalid, ...group }
  }, [classes, styles, name, data, wait, invalid, group])

  // Render LabelGroup component
  return (
    <Label {...labelProps}>
      <Group {...groupProps}>{children}</Group>
    </Label>
  )
}

export default LabelGroup
