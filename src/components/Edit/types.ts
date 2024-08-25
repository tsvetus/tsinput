import { ReactNode } from 'react'

import { InputClass, InputStyle } from '../../lib/Input'
import { IconClass, IconStyle } from '../Icon'

import { TsiMouseEventHandler, TsiKeyboardEventHandler, TsiInputEventHandler } from '../../util/types'

export interface EditClass {
  _?: string
  invalid?: string
  wait?: string
  input?: string | InputClass
  icon?: string | IconClass
}

export interface EditStyle {
  _?: object
  invalid?: object
  wait?: object
  input?: object | InputStyle
  icon?: object | IconStyle
}

export interface EditProps {
  className?: string | EditClass
  style?: object | EditStyle
  layout?: string | string[]
  name?: string
  data?: unknown
  wait?: boolean
  invalid?: boolean
  icon?: string
  value?: string | number
  readOnly?: boolean
  placeholder?: string
  children?: string | ReactNode
  onClick?: TsiMouseEventHandler<HTMLDivElement>
  onKeyDown?: TsiKeyboardEventHandler<HTMLDivElement>
  onIconClick?: TsiMouseEventHandler<HTMLElement>
  onInputClick?: TsiMouseEventHandler<HTMLInputElement>
  onInputKeyDown?: TsiKeyboardEventHandler<HTMLInputElement>
  onChange?: TsiInputEventHandler<HTMLInputElement>
}
