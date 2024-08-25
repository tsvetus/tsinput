import { ReactNode } from 'react'

import { TsiMouseEventHandler } from '../../util/types'

import { LabelClass, LabelStyle } from '../Label'

export interface LabelCheckBoxClass extends LabelClass {}

export interface LabelCheckBoxStyle extends LabelStyle {}

export interface LabelCheckBoxProps {
  className?: string | LabelCheckBoxClass
  style?: object | LabelCheckBoxStyle
  layout?: string | string[]
  name?: string
  data?: unknown
  wait?: boolean
  invalid?: boolean
  label?: string | ReactNode
  radio?: boolean
  value?: unknown
  valueChecked?: unknown
  valueUnchecked?: unknown
  events?: string | string[]
  onChange?: TsiMouseEventHandler<HTMLElement>
}
