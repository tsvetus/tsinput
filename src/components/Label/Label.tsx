import React, { useMemo, forwardRef } from 'react'

import Inline from './Inline'
import Column from './Column'

import { LabelProps } from './types'

/**
 * Label component. Provides a simple way to add labels to React components.
 */
const Label = forwardRef<HTMLDivElement, LabelProps>(
  (
    {
      className,
      style,
      layout = '',
      name,
      data,
      label = 'Label:',
      text = label,
      icon,
      wait,
      invalid,
      children,
      onClick,
      onTextClick,
      onIconClick
    },
    ref?
  ) => {
    const isColumn = useMemo(() => layout.includes('top') || layout.includes('border'), [layout])
    return isColumn ? (
      <Column
        ref={ref}
        className={className}
        style={style}
        layout={layout}
        name={name}
        data={data}
        label={label}
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
        ref={ref}
        className={className}
        style={style}
        layout={layout}
        name={name}
        data={data}
        label={label}
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
)

Label.displayName = 'Label'

export default Label
