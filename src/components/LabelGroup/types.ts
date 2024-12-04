import { ReactNode } from 'react'

import { LabelClass, LabelStyle, LabelProps } from '../Label'
import { GroupClass, GroupStyle, GroupProps } from '../Group'

export interface LabelGroupClass {
  _?: string
  label?: string | LabelClass
  group?: string | GroupClass
}

export interface LabelGroupStyle {
  _?: object
  label?: object | LabelStyle
  group?: object | GroupStyle
}

export interface LabelGroupProps {
  /** Component CSS class description */
  className?: string | LabelGroupClass
  /** Component CSS style description */
  style?: object | LabelGroupStyle
  /** Component name */
  name?: string
  /** Component data */
  data?: unknown
  /** Component wait state */
  wait?: boolean
  /** Component invalid state */
  invalid?: boolean
  /** Component label props */
  label: LabelProps
  /** Component icon props */
  group: GroupProps
  /** Group content */
  children?: string | ReactNode
}
