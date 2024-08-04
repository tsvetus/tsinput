import React, { useMemo, useCallback, MouseEvent, ReactNode } from 'react'

import { mergeClasses, mergeStyles } from '../../util'

import { TsiClass, TsiMouseEventHandler } from '../../util/types'

import useLayout from '../../hooks/useLayout'

import Text from '../Text'
import Icon from '../Icon'

interface InlineClass {
  _?: string
  invalid?: string | TsiClass
  wait?: string | TsiClass
  text?: string | TsiClass
  icon?: string | TsiClass
}

interface InlineStyle {
  _?: object
  invalid?: object
  wait?: object
  text?: object
  iccon?: object
}

interface InlineProps {
  className?: string | InlineClass
  style?: object | InlineStyle
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

const BASE = 'tsi-label'

const CLASS = {
  _: `${BASE} ${BASE}-inline`,
  text: {
    _: `${BASE}-text`,
    left: `${BASE}-text-left`,
    right: `${BASE}-text-right`
  },
  icon: {
    _: `${BASE}-icon`,
    left: `${BASE}-icon-left`,
    right: `${BASE}-icon-right`
  }
}

const Inline = ({
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
}: InlineProps) => {
  const isRightLabel = useMemo(() => layout.includes('right'), [layout])

  const layoutClasses = useMemo(() => mergeClasses(CLASS, className), [className])

  const layoutStyles = useMemo(() => mergeStyles(style), [style])

  const mergeLayout = useCallback(
    (key: string) => {
      switch (key) {
        case 'text-right':
        case 'icon-left':
          return isRightLabel
        case 'text-left':
        case 'icon-right':
          return !isRightLabel
        default:
          return false
      }
    },
    [isRightLabel]
  )

  const { classes, styles } = useLayout(layoutClasses, layoutStyles, mergeLayout)

  const params = useMemo(() => ({ name, data }), [data, name])

  const handleClick = onClick
    ? (event: MouseEvent<HTMLDivElement>) => {
        if (!wait) {
          onClick({ ...event, ...params })
        }
      }
    : undefined

  const handleTextClick = onTextClick
    ? (event: MouseEvent<HTMLDivElement>) => {
        onTextClick({ ...event, ...params })
      }
    : undefined

  const handleIconClick = onIconClick
    ? (event: MouseEvent<HTMLElement>) => {
        onIconClick({ ...event, ...params })
      }
    : undefined

  const textComponent = text ? (
    <Text
      className={classes.text}
      style={styles.text}
      value={text}
      wait={wait}
      invalid={invalid}
      onClick={handleTextClick}
    />
  ) : null

  const iconComponent = icon ? (
    <Icon
      className={classes.icon}
      style={styles.icon}
      icon={icon}
      wait={wait}
      invalid={invalid}
      onClick={handleIconClick}
    />
  ) : null

  return isRightLabel ? (
    <div className={classes._} style={styles._} onClick={handleClick}>
      {iconComponent}
      {children}
      {textComponent}
    </div>
  ) : (
    <div className={classes._} style={styles._} onClick={handleClick}>
      {textComponent}
      {children}
      {iconComponent}
    </div>
  )
}

export default Inline
