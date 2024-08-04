import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import { mergeClasses, mergeStyles, selectItems } from '../util'

import Group from '../lib/Group'

import Label from './Label'

const LabelGroup = ({ className, style, layout, name, data, label, icon, children, onLabelClick, onIconClick }) => {
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
      onTextClick={onLabelClick}
      onIconClick={onIconClick}
    >
      <Group className={classes.group} style={styles.group}>
        {children}
      </Group>
    </Label>
  )
}

LabelGroup.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  style: PropTypes.object,
  layout: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  name: PropTypes.string,
  data: PropTypes.any,
  label: PropTypes.any,
  icon: PropTypes.any,
  children: PropTypes.any,
  onLabelClick: PropTypes.func,
  onIconClick: PropTypes.func
}

export default LabelGroup
