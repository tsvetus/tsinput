import { ReactNode } from 'react'

export interface GroupClass {
  _?: string
}

export interface GroupStyle {
  _?: object
}

export interface GroupProps {
  /** css class name */
  className?: string | GroupClass
  /** css style */
  style?: object | GroupStyle
  /** Group content */
  children?: string | ReactNode
}
