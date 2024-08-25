import { TsiMouseEventHandler, TsiKeyboardEventHandler } from '../../util/types'

export interface IconClass {
  _?: string
  active?: string
  invalid?: string
  wait?: string
}

export interface IconStyle {
  _?: object
  active?: object
  invalid?: object
  wait?: object
}

export interface IconProps {
  className?: string | IconClass
  style?: object | IconStyle
  icon?: string
  name?: string
  data?: unknown
  baseClass?: string
  wait?: boolean
  invalid?: boolean
  onClick?: TsiMouseEventHandler<HTMLElement>
  onKeyDown?: TsiKeyboardEventHandler<HTMLElement>
}
