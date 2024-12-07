import { ReactNode } from 'react'

import { TsiMouseEventHandler } from '../../util/types'

import { TextClass, TextStyle } from '../Text'
import { IconClass, IconStyle } from '../Icon'

/** Label component CSS classes description */
export type LabelClass = {
  /** Default CSS class */
  _?: string
  /** Invalid state CSS class */
  invalid?: string
  /** Wait state CSS class */
  wait?: string
  /** Label header CSS class used for layout='top' or layout='border' */
  header?: string
  /** Label text component CSS class - the same as 'text' property */
  label?: string | TextClass
  /** Label text component CSS class - the same as 'label' property  */
  text?: string | TextClass
  /** Label icon component CSS class */
  icon?: string | IconClass
}

export type LabelStyle = {
  _?: object
  invalid?: object
  wait?: object
  header?: object
  label?: object | TextStyle
  text?: object | TextStyle
  iccon?: object | IconStyle
}

export type LabelProps = {
  className?: string | LabelClass
  style?: object | LabelStyle
  name?: string
  data?: unknown
  wait?: boolean
  invalid?: boolean
  layout?: string | string[]
  label?: string | ReactNode
  text?: string | ReactNode
  icon?: string
  children?: string | ReactNode
  /** On component click event handler */
  onClick?: TsiMouseEventHandler<HTMLDivElement>
  /** On component text click event handler */
  onTextClick?: TsiMouseEventHandler<HTMLDivElement>
  /** On component icon click event handler */
  onIconClick?: TsiMouseEventHandler<HTMLElement>
}
