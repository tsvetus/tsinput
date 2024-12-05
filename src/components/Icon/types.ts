import { TsiMouseEventHandler, TsiKeyboardEventHandler } from '../../util/types'

/** Icon component CSS class description */
export type IconClass = {
  /** Default CSS class  */
  _?: string
  /** Active state CSS class  */
  active?: string
  /** Invalid state CSS class  */
  invalid?: string
  /** Wait state CSS class  */
  wait?: string
}

/** Icon component CSS style description */
export type IconStyle = {
  /** Default CSS style  */
  _?: object
  /** Active state style  */
  active?: object
  /** Invalid state CSS style  */
  invalid?: object
  /** Wait state CSS style  */
  wait?: object
}

/** Icon component properties */
export type IconProps = {
  /** Icon component CSS class description */
  className?: string | IconClass
  /** Icon component CSS style description */
  style?: object | IconStyle
  /** Icon name */
  icon?: string
  /** Component name */
  name?: string
  /** Component data */
  data?: unknown
  /** Base icon class */
  baseClass?: string
  /** Component wait state */
  wait?: boolean
  /** Component invalid state */
  invalid?: boolean
  /** Compoinent click event */
  onClick?: TsiMouseEventHandler<HTMLElement>
  /** Compoinent key down event */
  onKeyDown?: TsiKeyboardEventHandler<HTMLElement>
}
