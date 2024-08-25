import { ListOption, ListEventHandler } from '../../lib/List'

export interface TabClass {
  _?: string
  active?: string
}

export interface TabStyle {
  _?: object
  active?: object
}

export interface TabControlClass {
  _: string
  header: string
  tab: string | TabClass
  content: string
}

export interface TabControlStyle {
  _: object
  header: object
  tab: object | TabStyle
  content: object
}

export interface TabControlProps {
  className?: string | TabControlClass
  style?: object | TabControlStyle
  name?: string
  data?: unknown
  options?: ListOption[]
  value?: string | number
  onChange?: ListEventHandler
}
