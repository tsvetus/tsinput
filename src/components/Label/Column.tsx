import React, { useMemo, useCallback, forwardRef, MouseEvent } from 'react'

import { mergeClasses, mergeStyles } from '../../util'

import useLayout from '../../hooks/useLayout'

import Text from '../Text'
import Icon from '../Icon'

import { LabelProps } from './types'

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

const Column = forwardRef<HTMLDivElement, LabelProps>(
  (
    {
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
    },
    ref?
  ) => {
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

    const [classes, styles] = useLayout(layoutClasses, layoutStyles, mergeLayout)

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
        name={name}
        data={data}
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
        name={name}
        data={data}
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
      <div ref={ref} className={classes._} style={styles._} onClick={handleClick}>
        {headerComponent}
        {children}
      </div>
    )
  }
)

Column.displayName = 'Column'

export default Column
