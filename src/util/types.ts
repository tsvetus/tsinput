import { MouseEvent, KeyboardEvent, ChangeEvent, CSSProperties, ReactNode } from 'react'

export type TsiObject = {
  [key: string]: object | TsiObject[] | string | number | boolean | undefined
}

export interface TsiEvent {
  name?: string
  data?: unknown
}
export type TsiEventHandler = (event: TsiEvent) => void

export interface TsiMouseEvent<T> extends MouseEvent<T>, TsiEvent {}
export type TsiMouseEventHandler<T> = (event: TsiMouseEvent<T>) => void

export interface TsiKeyboardEvent<T> extends KeyboardEvent<T>, TsiEvent {}
export type TsiKeyboardEventHandler<T> = (event: TsiKeyboardEvent<T>) => void

export interface TsiInputEvent<T> extends ChangeEvent<T> {
  value?: string
}
export type TsiInputEventHandler<T> = (event: TsiInputEvent<T>) => void

export type TsiTargetHandler = () => HTMLElement

export type TsiStyle = {
  _?: CSSProperties
} & {
  [key: string]: TsiStyle | undefined
}
export type TsiStyleSource = object | undefined | null

export type TsiClass = {
  _?: string
} & {
  [key: string]: TsiClass | undefined
}
export type TsiClassSource = string | object | undefined | null

export type TsiListItem = {
  [key: string]: string | number | ReactNode
}

export interface TsiListEvent extends TsiEvent {
  itemIndex?: number
  option?: TsiListItem
}
export type TsiListEventHandler = (event: TsiListEvent) => void
