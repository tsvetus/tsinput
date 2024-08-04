import React, { useMemo, useCallback, MouseEvent, ReactNode } from 'react'

import { mergeClasses, mergeStyles } from '../../util'

import { TsiClass, TsiMouseEventHandler } from '../../util/types'

import useLayout from '../../hooks/useLayout'

import Text from '../Text'
import Icon from '../Icon'

interface ColumnClass {
  _?: string
  invalid?: string | TsiClass
  wait?: string | TsiClass
  header?: string | TsiClass
  text?: string | TsiClass
  icon?: string | TsiClass
}

interface ColumnStyle {
  _?: object
  invalid?: object
  wait?: object
  header?: object
  text?: object
  iccon?: object
}

interface ColumnProps {
  className?: string | ColumnClass
  style?: object | ColumnStyle
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
  _: `${BASE} ${BASE}-column`,
  header: {
    _: `${BASE}-header`,
    border: `${BASE}-header-border`
  },
  text: {
    _: `${BASE}-text ${BASE}-text-top`,
    border: `${BASE}-text-border`
  },
  icon: {
    _: `${BASE}-icon ${BASE}-icon-top`,
    border: `${BASE}-icon-border`
  }
}

const Column = ({
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
}: ColumnProps) => {
  const isRightLabel = useMemo(() => layout.includes('right'), [layout])
  const isBorder = useMemo(() => layout.includes('border'), [layout])

  const layoutClasses = useMemo(() => mergeClasses(CLASS, className), [className])

  const layoutStyles = useMemo(() => mergeStyles(style), [style])

  const mergeLayout = useCallback(
    (key: string) => {
      switch (key) {
        case 'header-border':
        case 'text-border':
        case 'icon-border':
          return isBorder
        default:
          return false
      }
    },
    [isBorder]
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
  ) : (
    <div />
  )

  const iconComponent = icon ? (
    <Icon
      className={classes.icon}
      style={styles.icon}
      icon={icon}
      wait={wait}
      invalid={invalid}
      onClick={handleIconClick}
    />
  ) : (
    <div />
  )

  const headerComponent = isRightLabel ? (
    <div className={classes.header?._} style={styles.header?._}>
      {iconComponent}
      {textComponent}
    </div>
  ) : (
    <div className={classes.header?._} style={styles.header?._}>
      {textComponent}
      {iconComponent}
    </div>
  )

  return (
    <div className={classes._} style={styles._} onClick={handleClick}>
      {headerComponent}
      {children}
    </div>
  )
}

export default Column
