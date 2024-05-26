import React, { useRef, useState, useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'

import { mergeClasses, mergeStyles, asArray } from '../util'

import Overlay from '../lib/Overlay'
import List from '../lib/List'

import Edit from './Edit'

const ListBox = ({
  className,
  style,
  layout,
  name,
  data,
  value,
  wait,
  invalid,
  readOnly = true,
  placeholder,
  valueField = 'value key code id',
  nameField = 'name label text',
  options,
  onClick,
  onEditClick,
  onIconClick,
  onChange
}) => {
  const editRef = useRef()

  const classes = useMemo(() => mergeClasses(className), [className])

  const styles = useMemo(() => mergeStyles(style), [style])

  const originalOptions = useMemo(() => options || [], [options])

  const listOptions = useMemo(() => {
    const vf = asArray(valueField)
    const nf = asArray(nameField)
    return originalOptions
      .map((option, index) => {
        if (null === option || undefined === option) {
          return { value: option, name: `${option}`, index }
        } else if ('string' === typeof option || 'number' === typeof option) {
          return { value: option, name: `${option}`, index }
        } else if ('object' === typeof option) {
          const [v, n] = [vf.find(v => option[v]), nf.find(n => option[n])]
          return v && n ? { value: option[v], name: option[n], index } : null
        } else return null
      })
      .filter(option => option)
  }, [originalOptions, valueField, nameField])

  const [itemIndex, itemName] = useMemo(() => {
    const index = listOptions.findIndex(v => value === v.value)
    return [index, index >= 0 ? listOptions[index]?.name || '' : '']
  }, [value, listOptions])

  const [showOverlay, setShowOverlay] = useState(false)

  const handleIconClick = event => {
    event.nativeEvent.stopPropagation()
    event.nativeEvent.preventDefault()
    onIconClick?.(event)
    setShowOverlay(!showOverlay)
  }

  const handleEditClick = event => {
    event.nativeEvent.stopPropagation()
    event.nativeEvent.preventDefault()
    onEditClick?.(event)
    setShowOverlay(!showOverlay)
  }

  const handleListChange = event => {
    event.nativeEvent.stopPropagation()
    event.nativeEvent.preventDefault()
    onChange?.({
      ...event,
      name,
      data,
      value: listOptions[event.itemIndex]?.value,
      option: originalOptions[event.itemIndex]
    })
    setShowOverlay(false)
  }

  const handleListClose = useCallback(event => {
    event.nativeEvent.stopPropagation()
    event.nativeEvent.preventDefault()
    setShowOverlay(false)
  }, [])

  const handleKeyDown = event => {
    if (!showOverlay && 'Enter' === event.nativeEvent.key) {
      event.nativeEvent.stopPropagation()
      event.nativeEvent.preventDefault()
      setShowOverlay(true)
    }
  }

  return (
    <Edit
      ref={editRef}
      className={classes.edit}
      style={styles.edit}
      layout={layout}
      name={name}
      data={data}
      icon={showOverlay ? 'angle-down' : 'angle-up'}
      wait={wait}
      invalid={invalid}
      readOnly={readOnly}
      placeholder={placeholder}
      onClick={onClick}
      onChange={onChange}
      value={itemName}
      onIconClick={handleIconClick}
      onEditClick={handleEditClick}
      onKeyDown={handleKeyDown}
    >
      <Overlay className={classes.overlay} style={styles.overlay} show={showOverlay} onTarget={() => editRef.current}>
        <List
          className={classes.list}
          style={styles.list}
          itemIndex={itemIndex}
          options={listOptions}
          onClose={handleListClose}
          onChange={handleListChange}
        />
      </Overlay>
    </Edit>
  )
}

ListBox.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  style: PropTypes.object,
  layout: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  name: PropTypes.string,
  data: PropTypes.any,
  value: PropTypes.any,
  wait: PropTypes.any,
  invalid: PropTypes.any,
  readOnly: PropTypes.any,
  placeholder: PropTypes.string,
  valueField: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  nameField: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  options: PropTypes.array,
  onClick: PropTypes.func,
  onEditClick: PropTypes.func,
  onIconClick: PropTypes.func,
  onChange: PropTypes.func
}

export default ListBox
