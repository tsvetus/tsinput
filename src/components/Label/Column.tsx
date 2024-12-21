import React, { useMemo, forwardRef, MouseEvent } from 'react'

import { createLayout } from '../../util'

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
      label,
      text,
      icon,
      wait,
      disabled,
      invalid,
      children,
      onClick,
      onTextClick,
      onIconClick
    },
    ref?
  ) => {
    const [isRightLabel, isBorder] = useMemo(() => [layout.includes('right'), layout.includes('border')], [layout])

    const [classes, styles] = useMemo(
      () =>
        createLayout([CLASS, className], [style], {
          header: { border: isBorder },
          text: { border: isBorder },
          icon: { border: isBorder }
        }),
      [className, isBorder, style]
    )

    const [textClasses, textStyles] = useMemo(
      () => createLayout([classes.text, classes.label], [styles.text, styles.label]),
      [classes, styles]
    )

    const params = useMemo(() => ({ name, data }), [data, name])

    const handleClick = onClick
      ? (event: MouseEvent<HTMLDivElement>) => {
          if (!wait && !disabled) {
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

    const labelText = text || label

    const textComponent = labelText ? (
      <Text
        className={textClasses}
        style={textStyles}
        name={name}
        data={data}
        value={labelText}
        wait={wait}
        disabled={disabled}
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
        disabled={disabled}
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
