import React, { useRef, useState, useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'

import Overlay from '../../lib/Overlay'
import List from '../../lib/List'

import Edit from '../Edit'

import { concat } from '../../util'

import '../../styles/edit.css'
import './ListBox.css'

const CLASS = 'tsi-edit'

const ListBox = props => {
  const editRef = useRef()

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
    if (props.onIconClick) props.onIconClick(event)
    setShowOverlay(!showOverlay)
  }

  const onEditClick = event => {
    if (showOverlay) {
      event.nativeEvent.stopPropagation()
      if (props.onEditClick) props.onEditClick(event)
    } else {
      event.nativeEvent.stopPropagation()
      event.nativeEvent.preventDefault()
      if (props.onEditClick) props.onEditClick(event)
      setShowOverlay(true)
    }
  }

  const onListChange = props.onChange
    ? event => {
        event.nativeEvent.stopPropagation()
        event.nativeEvent.preventDefault()
        if (props.onChange)
          props.onChange({
            ...event,
            name: props.name,
            data: props.data,
            value: options[event.itemIndex]?.value,
            option: originalOptions[event.index]
          })
        setShowOverlay(false)
      }
    : null

  const onListClose = useCallback(event => {
    event.nativeEvent.stopPropagation()
    event.nativeEvent.preventDefault()
    setShowOverlay(false)
  }, [])

  return (
    <Edit ref={editRef} {...props} value={itemName} onIconClick={onIconClick} onEditClick={onEditClick}>
      <Overlay show={showOverlay} onTarget={() => editRef.current}>
        <List
          className={concat(`${CLASS}-list`, props.listClassName)}
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
  className: PropTypes.string,
  listClassName: PropTypes.string,
  name: PropTypes.string,
  data: PropTypes.any,
  label: PropTypes.any,
  value: PropTypes.any,
  showIcon: PropTypes.any,
  icon: PropTypes.any,
  layout: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  wait: PropTypes.any,
  invalid: PropTypes.any,
  readOnly: PropTypes.any,
  valueField: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  nameField: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  options: PropTypes.array,
  onClick: PropTypes.func,
  onLabelClick: PropTypes.func,
  onEditClick: PropTypes.func,
  onIconClick: PropTypes.func,
  onChange: PropTypes.func
}

ListBox.defaultProps = {
  readOnly: true,
  showIcon: true,
  valueField: 'value key code id',
  nameField: 'name label text'
}

export default ListBox
