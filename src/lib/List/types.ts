import { ReactNode } from 'react'

import { TsiMouseEventHandler, TsiEvent, TsiKeyboardEventHandler } from '../../util/types'

export type ListItemRenderer = (item?: ListItem, index?: number, items?: ListItem[]) => ReactNode | string

export type ListOption = {
  value?: string | number | ReactNode | null
  name?: string | number | ReactNode | null
  index?: number | null
  render?: ListItemRenderer | null
} & {
  [key: string]: string | number | ReactNode | null | undefined
}

export type ListItem = string | ListOption | null | undefined

export interface ListEvent extends TsiEvent {
  optionIndex?: number
  option?: string | ListItem | null
  value?: string | number | ReactNode | null
}

export type ListEventHandler = (event: ListEvent) => void

export interface ItemClass {
  _?: string
  selected?: string
  focused?: string
}

export interface ItemsClass {
  _?: string
  item?: string | ItemClass
}

export interface ListClass {
  _?: string
  items?: string | ItemsClass
}

export interface ItemStyle {
  _?: string
  selected?: string
  focused?: string
}

export interface ItemsStyle {
  _?: object
  item?: object | ItemStyle
}

export interface ListStyle {
  _?: object
  items?: object | ItemsStyle
}

export interface ListProps {
  className?: string | ListClass
  style?: object | ListStyle
  name?: string
  data?: unknown
  options: ListOption[]
  optionIndex?: number
  onChange: ListEventHandler
  onClose: ListEventHandler
  onClick?: TsiMouseEventHandler<HTMLDivElement>
  onKeyDown?: TsiKeyboardEventHandler<HTMLDivElement>
}

export type StepEventHandler = (event: MouseEvent | KeyboardEvent, step: number) => void
export type ChangeEventHandler = (event: MouseEvent | KeyboardEvent) => void
export type CloseEventHandler = (event: MouseEvent | KeyboardEvent) => void
