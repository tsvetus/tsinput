import { LabelClass, LabelStyle, LabelProps } from '../Label'
import { IconClass, IconStyle, IconProps } from '../Icon'

export type LabelIconClass = {
  _?: string
  label: string | LabelClass
  icon: string | IconClass
}

export type LabelIconStyle = {
  _?: object
  label?: object | LabelStyle
  icon?: object | IconStyle
}

export type LabelIconProps = {
  className?: string | LabelIconClass
  style?: object | LabelIconStyle
  label: LabelProps
  icon: IconProps
}
