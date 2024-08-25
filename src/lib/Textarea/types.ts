import { TsiMouseEventHandler, TsiKeyboardEventHandler, TsiInputEventHandler } from '../../util/types'

export interface TextareaClass {
  _?: string
}

export interface TextareaStyle {
  _?: object
}

export interface TextareaProps {
  className?: string | TextareaClass
  style?: object | TextareaStyle
  name?: string
  data?: unknown
  value?: string
  readOnly: boolean
  placeholder?: string
  onChange?: TsiInputEventHandler<HTMLTextAreaElement>
  onClick?: TsiMouseEventHandler<HTMLTextAreaElement>
  onKeyDown?: TsiKeyboardEventHandler<HTMLTextAreaElement>
}
