import React, { useMemo, ReactNode } from 'react'

import { TsiClass, TsiMouseEventHandler } from '../../util/types'

import Inline from './Inline'
import Column from './Column'

interface LabelClass {
  _?: string
  invalid?: string | TsiClass
  wait?: string | TsiClass
  header?: string | TsiClass
  text?: string | TsiClass
  icon?: string | TsiClass
}

interface LabelStyle {
  _?: object
  invalid?: object
  wait?: object
  header?: object
  text?: object
  iccon?: object
}

interface LabelProps {
  className?: string | LabelClass
  style?: object | LabelStyle
  name?: string
  data?: unknown
  wait?: unknown
  invalid?: unknown
  layout?: string | string[]
  text?: string | ReactNode
  icon?: string
  children?: string | ReactNode
  onClick?: TsiMouseEventHandler<HTMLDivElement>
  onTextClick?: TsiMouseEventHandler<HTMLDivElement>
  onIconClick?: TsiMouseEventHandler<HTMLElement>
}

const Label = ({
  className,
  style,
  layout = '',
  name,
  data,
  text,
  icon,
  wait,
  invalid,
  children,
  onClick,
  onTextClick,
  onIconClick
}: LabelProps) => {
  const isColumn = useMemo(() => layout.includes('top') || layout.includes('border'), [layout])
  return isColumn ? (
    <Column
      className={className}
      style={style}
      layout={layout}
      name={name}
      data={data}
      text={text}
      icon={icon}
      wait={wait}
      invalid={invalid}
      onClick={onClick}
      onTextClick={onTextClick}
      onIconClick={onIconClick}
    >
      {children}
    </Column>
  ) : (
    <Inline
      className={className}
      style={style}
      layout={layout}
      name={name}
      data={data}
      text={text}
      icon={icon}
      wait={wait}
      invalid={invalid}
      onClick={onClick}
      onTextClick={onTextClick}
      onIconClick={onIconClick}
    >
      {children}
    </Inline>
  )
}

export default Label
