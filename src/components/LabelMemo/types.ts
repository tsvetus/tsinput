import { ReactNode } from 'react'

import { TsiMouseEventHandler, TsiKeyboardEventHandler, TsiInputEventHandler } from '../../util/types'

import { LabelClass, LabelStyle } from '../Label'
import { MemoClass, MemoStyle } from '../Memo'

export interface LabelMemoClass {
  _?: string
  label?: LabelClass
  memo?: MemoClass
}

export interface LabelMemoStyle {
  _?: object
  label?: LabelStyle
  memo?: MemoStyle
}

export interface LabelMemoProps {
  className?: string | LabelMemoClass
  style?: object | LabelMemoStyle
  name?: string
  data?: unknown
  layout?: string | string[]
  label?: string | ReactNode
  icon?: string
  wait?: boolean
  invalid?: boolean
  value?: string
  readOnly?: boolean
  placeholder?: string
  onLabelClick?: TsiMouseEventHandler<HTMLDivElement>
  onIconClick?: TsiMouseEventHandler<HTMLElement>
  onChange?: TsiInputEventHandler<HTMLTextAreaElement>
  onMemoClick?: TsiMouseEventHandler<HTMLTextAreaElement>
  onMemoKeyDown?: TsiKeyboardEventHandler<HTMLTextAreaElement>
}
