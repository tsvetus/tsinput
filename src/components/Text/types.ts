import { ReactNode } from 'react'

import { TsiMouseEventHandler, TsiKeyboardEventHandler } from '../../util/types'

export interface TextClass {
  _?: string
  invalid?: string
  wait?: string
}

export interface TextStyle {
  _?: object
  invalid?: object
  wait?: object
}

export interface TextProps {
  className?: string | TextClass
  style?: object | TextStyle
  name?: string
  data?: unknown
  wait?: boolean
  invalid?: boolean
  value?: string | ReactNode
  onClick?: TsiMouseEventHandler<HTMLDivElement>
  onKeyDown?: TsiKeyboardEventHandler<HTMLDivElement>
}
