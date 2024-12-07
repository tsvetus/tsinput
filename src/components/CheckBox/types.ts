import { ReactNode } from 'react'

import { TsiMouseEventHandler } from '../../util/types'

import { LabelClass, LabelStyle } from '../Label'

export type CheckBoxClass = LabelClass

export type CheckBoxStyle = LabelStyle

export type CheckBoxProps = {
  className?: string | CheckBoxClass
  style?: object | CheckBoxStyle
  layout?: string | string[]
  name?: string
  data?: unknown
  wait?: boolean
  disabled?: boolean
  invalid?: boolean
  label?: string | ReactNode
  radio?: boolean
  value?: unknown
  valueChecked?: unknown
  valueUnchecked?: unknown
  events?: string | string[]
  onChange?: TsiMouseEventHandler<HTMLElement>
}
