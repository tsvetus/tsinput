import React, { useRef, useState, useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'

import { mergeClasses, mergeStyles } from '../util'

import Overlay from '../lib/Overlay'
import List from '../lib/List'

import Edit from './Edit'

const ListBox = props => {
  const editRef = useRef()

  const classes = useMemo(() => mergeClasses(props.className), [props.className])

  const styles = useMemo(() => mergeStyles(props.style), [props.style])

  const originalOptions = useMemo(() => props.options || [], [props.options])

  const options = useMemo(() => {
    const valueField = props.valueField?.split(' ') || []
    const nameField = props.nameField?.split(' ') || []
    return originalOptions
      .map((option, index) => {
        if (null === option || undefined === option) {
          return { value: option, name: `${option}`, index }
        } else if ('string' === typeof option || 'number' === typeof option) {
          return { value: option, name: `${option}`, index }
        } else if ('object' === typeof option) {
          const [v, n] = [valueField.find(v => option[v]), nameField.find(n => option[n])]
          return v && n ? { value: option[v], name: option[n], index } : null
        } else return null
      })
      .filter(option => option)
  }, [originalOptions, props.valueField, props.nameField])

  const [itemIndex, itemName] = useMemo(() => {
    const index = options.findIndex(v => props.value === v.value)
    return [index, index >= 0 ? options[index]?.name || '' : '']
  }, [props.value, options])

  const [showOverlay, setShowOverlay] = useState(false)

  const onIconClick = event => {
    event.nativeEvent.stopPropagation()
    event.nativeEvent.preventDefault()
    props.onIconClick?.(event)
    setShowOverlay(!showOverlay)
  }

  const onEditClick = event => {
    event.nativeEvent.stopPropagation()
    event.nativeEvent.preventDefault()
    props.onEditClick?.(event)
    setShowOverlay(!showOverlay)
  }

  const onListChange = event => {
    event.nativeEvent.stopPropagation()
    event.nativeEvent.preventDefault()
    props.onChange?.({
      ...event,
      name: props.name,
      data: props.data,
      value: options[event.itemIndex]?.value,
      option: originalOptions[event.itemIndex]
    })
    setShowOverlay(false)
  }

  const onListClose = useCallback(event => {
    event.nativeEvent.stopPropagation()
    event.nativeEvent.preventDefault()
    setShowOverlay(false)
  }, [])

  const onKeyDown = event => {
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
      layout={props.layout}
      name={props.name}
      data={props.data}
      icon={showOverlay ? 'angle-down' : 'angle-up'}
      wait={props.wait}
      invalid={props.invalid}
      readOnly={props.readOnly}
      placeholder={props.placeholder}
      onClick={props.onClick}
      onChange={props.onChange}
      value={itemName}
      onIconClick={onIconClick}
      onEditClick={onEditClick}
      onKeyDown={onKeyDown}
    >
      <Overlay className={classes.overlay} style={styles.overlay} show={showOverlay} onTarget={() => editRef.current}>
        <List
          className={classes.list}
          style={styles.list}
          itemIndex={itemIndex}
          options={options}
          onClose={onListClose}
          onChange={onListChange}
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
  // onLabelClick: PropTypes.func,
  onEditClick: PropTypes.func,
  onIconClick: PropTypes.func,
  onChange: PropTypes.func
}

ListBox.defaultProps = {
  readOnly: true,
  valueField: 'value key code id',
  nameField: 'name label text'
}

export default ListBox
