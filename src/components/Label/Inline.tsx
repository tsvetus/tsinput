import React, { useMemo, forwardRef, MouseEvent } from 'react'

import { createLayout } from '../../util'

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
    const isRightLabel = useMemo(() => layout.includes('right'), [layout])

    const [classes, styles] = useMemo(
      () =>
        createLayout([CLASS, className], [style], {
          text: {
            left: !isRightLabel,
            right: isRightLabel
          },
          icon: {
            left: isRightLabel,
            right: !isRightLabel
          }
        }),
      [className, isRightLabel, style]
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
    ) : null

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
