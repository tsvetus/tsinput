import React, { useMemo, useCallback, forwardRef, Ref, MouseEvent, KeyboardEvent, ChangeEvent } from 'react'

import { mergeClasses, mergeStyles } from '../../util'

import Input from '../../lib/Input'
import Icon from '../Icon'

import useLayout from '../../hooks/useLayout'

import { EditProps } from './types'

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
      onKeyDown,
      onIconClick,
      onInputClick,
      onInputKeyDown,
      onChange
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

    const [classes, styles] = useLayout(layoutClasses, layoutStyles, mergeLayout)

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

    const handleKeyDown = onKeyDown
      ? (event: KeyboardEvent<HTMLDivElement>) => {
          onKeyDown({ ...event, ...params })
        }
      : undefined

    const handleInputClick = onInputClick
      ? (event: MouseEvent<HTMLInputElement>) => {
          onInputClick({ ...event, ...params })
        }
      : undefined

    const handleInputKeyDown = onInputKeyDown
      ? (event: KeyboardEvent<HTMLInputElement>) => {
          onInputKeyDown({ ...event, ...params })
        }
      : undefined

    const handleIconClick = onIconClick
      ? (event: MouseEvent<HTMLElement>) => {
          onIconClick({ ...event, ...params })
        }
      : undefined

    const iconComponent = icon ? (
      <Icon
        className={classes?.icon}
        style={styles?.icon}
        icon={icon}
        wait={wait}
        invalid={invalid}
        onClick={handleIconClick}
      />
    ) : undefined

    const inputComponent = (
      <Input
        className={classes?.input?._}
        style={styles?.input?._}
        value={`${value ?? ''}`}
        placeholder={placeholder}
        readOnly={isReadOnly}
        name={name}
        data={data}
        onChange={handleChange}
        onClick={handleInputClick}
        onKeyDown={handleInputKeyDown}
      />
    )

    return isRightInput ? (
      <div ref={ref} className={classes?._} style={styles?._} onClick={handleClick} onKeyDown={handleKeyDown}>
        {iconComponent}
        {inputComponent}
        {children}
      </div>
    ) : (
      <div ref={ref} className={classes?._} style={styles?._} onClick={handleClick} onKeyDown={handleKeyDown}>
        {inputComponent}
        {iconComponent}
        {children}
      </div>
    )
  }
)

Edit.displayName = 'Edit'

export default Edit
