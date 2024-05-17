import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import { mergeClasses, mergeStyles } from '../util'

import Label from './Label'
import Text from './Text'

const LabelText = props => {
  const layout = useMemo(() => ((props.layout || []).includes('right') ? ['top', 'right'] : ['top']), [props.layout])
  const classes = useMemo(() => mergeClasses(props.className), [props.className])
  const styles = useMemo(() => mergeStyles(props.style), [props.style])
  return (
    <Label
      classnem={classes.label}
      style={styles.label}
      layout={layout}
      name={props.name}
      data={props.data}
      text={props.label}
      icon={props.icon}
      wait={props.wait}
      invalid={props.invalid}
      onTextClick={props.onLabelClick}
      onIconClick={props.onLabelIconClick}
    >
      <Text
        classnem={classes.text}
        style={styles.text}
        name={props.name}
        data={props.data}
        wait={props.wait}
        invalid={props.invalid}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
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
  onLabelClick: PropTypes.func,
  onLabelIconClick: PropTypes.func,
  onChange: PropTypes.func
}

export default LabelText
