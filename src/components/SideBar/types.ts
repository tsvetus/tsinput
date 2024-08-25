import { ReactNode } from 'react'

import { IconClass, IconStyle } from '../Icon'

import { TsiMouseEventHandler } from '../../util/types'

export interface SideBarClass {
  _?: string
  header?: string
  title?: string
  close?: string | IconClass
  content?: string
  footer?: string
}

export interface SideBarStyle {
  _?: object
  header?: object
  title?: object
  close?: object | IconStyle
  content?: object
  footer?: object
}

export interface SideBarProps {
  className?: string | SideBarClass
  style?: object | SideBarStyle
  name?: string
  data?: unknown
  show?: boolean
  title?: string | ReactNode
  children?: string | ReactNode
  content?: string | ReactNode
  footer?: string | ReactNode
  transition?: number | string
  width?: number | string
  onClose?: TsiMouseEventHandler<HTMLElement>
}
