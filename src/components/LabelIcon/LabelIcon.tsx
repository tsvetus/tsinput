import React from 'react'

import Label from '../Label'
import Icon from '../Icon'

import { LabelIconProps } from './types'

const LabelIcon = ({ className, style, label, icon }: LabelIconProps) => {
  return (
    <Label className={className} style={style} {...label}>
      <Icon {...icon} />
    </Label>
  )
}

export default LabelIcon
