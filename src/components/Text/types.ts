import { ReactNode } from 'react'

import { TsiMouseEventHandler, TsiKeyboardEventHandler } from '../../util/types'

export interface TextClass {
  _?: string
  invalid?: string
  wait?: string
  disabled?: string
}

export interface TextStyle {
  _?: object
  invalid?: object
  wait?: object
  disabled?: object
}

export interface TextProps {
  className?: string | TextClass
  style?: object | TextStyle
  name?: string
  data?: unknown
  wait?: boolean
  invalid?: boolean
  disabled?: boolean
  value?: string | ReactNode
  onClick?: TsiMouseEventHandler<HTMLDivElement>
  onKeyDown?: TsiKeyboardEventHandler<HTMLDivElement>
}
