import React, { useMemo, useCallback } from 'react'
import PropTypes from 'prop-types'

import { mergeClasses, mergeStyles, selectItems } from '../util'

import useLayout from '../hooks/useLayout'

import Label from './Label'
import Memo from './Memo'

const BASE = 'tsi-label-memo'

const CLASS = {
  memo: {
    _: BASE,
    border: `${BASE}-border`
  }
}

const LabelMemo = ({
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

  const isBorder = useMemo(() => layoutLabel.includes('border'), [layoutLabel])

  const layoutClasses = useMemo(() => mergeClasses(CLASS, className), [className])

  const layoutStyles = useMemo(() => mergeStyles(style), [style])

  const mergeLayout = useCallback(
    key => {
      switch (key) {
        case 'memo-border':
          return isBorder
        default:
          return false
      }
    },
    [isBorder]
  )

  const { classes, styles } = useLayout(layoutClasses, layoutStyles, mergeLayout)

  return (
    <Label
      className={classes.label}
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
      <Memo
        className={classes.memo}
        style={styles.memo}
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

LabelMemo.propTypes = {
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

export default LabelMemo
