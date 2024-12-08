import React, { useMemo, forwardRef, Ref, MouseEvent, KeyboardEvent, ChangeEvent } from 'react'

import { createLayout } from '../../util'

import Input from '../../lib/Input'
import Icon from '../Icon'

import { EditProps } from './types'

const BASE = 'tsi-edit'

const CLASS = {
  _: BASE,
  wait: `${BASE}-wait`,
  invalid: `${BASE}-invalid`,
  disabled: `${BASE}-disabled`,
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
      disabled,
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
    const isReadOnly = useMemo(() => Boolean(readOnly || wait || disabled), [readOnly, wait, disabled])

    const [classes, styles] = useMemo(
      () =>
        createLayout([CLASS, className], [style], {
          wait,
          invalid,
          disabled,
          'input-right': isRightInput,
          'icon-left': isRightInput,
          'input-left': !isRightInput,
          'icon-right': !isRightInput
        }),
      [className, style, wait, invalid, disabled, isRightInput]
    )

    const params = useMemo(() => ({ name, data }), [data, name])

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
        disabled={disabled}
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
