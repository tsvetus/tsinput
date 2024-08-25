import { ReactNode } from 'react'

import { TsiMouseEventHandler } from '../../util/types'

import { TextClass, TextStyle } from '../Text'
import { IconClass, IconStyle } from '../Icon'

export interface LabelClass {
  _?: string
  invalid?: string
  wait?: string
  header?: string
  text?: string | TextClass
  icon?: string | IconClass
}

export interface LabelStyle {
  _?: object
  invalid?: object
  wait?: object
  header?: object
  text?: object | TextStyle
  iccon?: object | IconStyle
}

export interface LabelProps {
  className?: string | LabelClass
  style?: object | LabelStyle
  name?: string
  data?: unknown
  wait?: boolean
  invalid?: boolean
  layout?: string | string[]
  text?: string | ReactNode
  icon?: string
  children?: string | ReactNode
  onClick?: TsiMouseEventHandler<HTMLDivElement>
  onTextClick?: TsiMouseEventHandler<HTMLDivElement>
  onIconClick?: TsiMouseEventHandler<HTMLElement>
}
