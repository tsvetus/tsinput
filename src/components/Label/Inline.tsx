import React, { useMemo, useCallback, forwardRef, MouseEvent } from 'react'

import { mergeClasses, mergeStyles } from '../../util'

import useLayout from '../../hooks/useLayout'

import Text from '../Text'
import Icon from '../Icon'

import { LabelProps } from './types'

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

const Inline = forwardRef<HTMLDivElement, LabelProps>(
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
    ) : null

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
    ) : null

    return isRightLabel ? (
      <div ref={ref} className={classes._} style={styles._} onClick={handleClick}>
        {iconComponent}
        {children}
        {textComponent}
      </div>
    ) : (
      <div ref={ref} className={classes._} style={styles._} onClick={handleClick}>
        {textComponent}
        {children}
        {iconComponent}
      </div>
    )
  }
)

Inline.displayName = 'Inline'

export default Inline
