import { ReactNode } from 'react'

import { TsiMouseEventHandler, TsiKeyboardEventHandler } from '../../util/types'

export interface MenuItemClass {
  _?: string
}

export interface MenuItemStyle {
  _?: object
}

export interface MenuItemProps {
  className?: string | MenuItemClass
  style?: object | MenuItemStyle
  name?: string | ReactNode
  data?: unknown
  value?: unknown
  children?: string | ReactNode
  onClick?: TsiMouseEventHandler<HTMLDivElement>
  onKeyDown?: TsiKeyboardEventHandler<HTMLDivElement>
}
