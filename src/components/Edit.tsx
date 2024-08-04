import React, { useMemo, useCallback, forwardRef, Ref, ReactNode, MouseEvent, ChangeEvent } from 'react'

import Input from '../lib/Input'

import Icon from './Icon'

import { mergeClasses, mergeStyles } from '../util'

import { TsiClass, TsiMouseEventHandler, TsiKeyboardEventHandler, TsiInputEventHandler } from '../util/types'

import useLayout from '../hooks/useLayout'

interface EditClass {
  _?: string | TsiClass
  invalid?: string | TsiClass
  wait?: string
}

interface EditStyle {
  _?: object
  invalid?: object
  wait?: object
}

interface EditProps {
  className?: string | EditClass
  style?: object | EditStyle
  layout?: string | string[]
  name?: string
  data?: unknown
  wait?: unknown
  invalid?: unknown
  icon?: string
  value?: string
  readOnly?: boolean
  placeholder?: string
  children?: string | ReactNode
  onIconClick?: TsiMouseEventHandler<HTMLElement>
  onEditClick?: TsiMouseEventHandler<HTMLInputElement>
  onChange?: TsiInputEventHandler<HTMLInputElement>
  onClick?: TsiMouseEventHandler<HTMLDivElement>
  onKeyDown?: TsiKeyboardEventHandler<HTMLDivElement>
}

const BASE = 'tsi-edit'

const CLASS = {
  _: BASE,
  wait: `${BASE}-wait`,
  invalid: `${BASE}-wait`,
  input: {
    _: `${BASE}-input`,
    left: `${BASE}-input-left`,
    right: `${BASE}-input-right`
  },
  icon: {
    _: `${BASE}-icon`,
    left: `${BASE}-icon-left`,
    right: `${BASE}-icon-right`
  }
}

const Edit = forwardRef(
  (
    {
      className,
      style,
      layout = '',
      name,
      data,
      value,
      icon,
      wait,
      invalid,
      readOnly,
      placeholder,
      children,
      onClick,
      onEditClick,
      onIconClick,
      onChange,
      onKeyDown
    }: EditProps,
    ref?: Ref<HTMLInputElement>
  ) => {
    const isRightInput = useMemo(() => layout.includes('right'), [layout])

    const layoutClasses = useMemo(() => mergeClasses(CLASS, className), [className])

    const layoutStyles = useMemo(() => mergeStyles(style), [style])

    const mergeLayout = useCallback(
      (key: string) => {
        switch (key) {
          case 'wait':
            return wait
          case 'invalid':
            return invalid
          case 'input-right':
          case 'icon-left':
            return isRightInput
          case 'input-left':
          case 'icon-right':
            return !isRightInput
          default:
            return false
        }
      },
      [wait, invalid, isRightInput]
    )

    const { classes, styles } = useLayout(layoutClasses, layoutStyles, mergeLayout)

    const params = useMemo(() => ({ name, data }), [data, name])

    const isReadOnly = useMemo(() => Boolean(readOnly || wait), [readOnly, wait])

    const handleChange = onChange
      ? (event: ChangeEvent<HTMLInputElement>) => {
          if (!isReadOnly) {
            onChange({ ...event, ...params })
          }
        }
      : undefined

    const handleClick = onClick
      ? (event: MouseEvent<HTMLDivElement>) => {
          onClick({ ...event, ...params })
        }
      : undefined

    const handleInputClick = onEditClick
      ? (event: MouseEvent<HTMLInputElement>) => {
          onEditClick({ ...event, ...params })
        }
      : undefined

    const handleIconClick = onIconClick
      ? (event: MouseEvent<HTMLElement>) => {
          onIconClick({ ...event, ...params })
        }
      : undefined

    const iconComponent = icon ? (
      <Icon
        className={classes.icon}
        style={styles.icon}
        icon={icon}
        wait={wait}
        invalid={invalid}
        onClick={handleIconClick}
      />
    ) : undefined

    const inputComponent = (
      <Input
        className={classes.input?._}
        style={styles.input?._}
        value={value}
        placeholder={placeholder}
        readOnly={isReadOnly}
        name={name}
        data={data}
        onChange={handleChange}
        onClick={handleInputClick}
        onKeyDown={onKeyDown}
      />
    )

    return isRightInput ? (
      <div ref={ref} className={classes._} style={styles._} onClick={handleClick}>
        {iconComponent}
        {inputComponent}
        {children}
      </div>
    ) : (
      <div ref={ref} className={classes._} style={styles._} onClick={handleClick}>
        {inputComponent}
        {iconComponent}
        {children}
      </div>
    )
  }
)

Edit.displayName = 'Edit'

export default Edit
