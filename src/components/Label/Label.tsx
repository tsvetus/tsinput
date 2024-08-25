import React, { useMemo } from 'react'

import Inline from './Inline'
import Column from './Column'

import { LabelProps } from './types'

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
