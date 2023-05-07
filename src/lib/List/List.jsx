import React, { useMemo, forwardRef, useState, useRef } from 'react'
import PropTypes from 'prop-types'

import useEventListener from '../../hooks/useEventListener'

import { concat } from '../../util'

import './List.css'

const CLASS = 'tsi-list'

const List = forwardRef((props, ref) => {
  const className = useMemo(() => concat(CLASS, props.className), [props.className])
  const parentClassName = useMemo(() => props.className?.split(' ')?.[0] || null, [props.className])

  const options = useMemo(() => props.options || [], [props.options])

  const itemsCount = useMemo(() => options.length, [options])

  const [focusIndex, setFocusIndex] = useState(props.itemIndex)

  const stepRef = useRef()
  stepRef.current = (event, step) => {
    event.preventDefault()
    event.stopPropagation()
    const newIndex = focusIndex + step
    if (newIndex >= 0 && newIndex < itemsCount) setFocusIndex(newIndex)
  }

  const changeRef = useRef()
  changeRef.current = event => {
    event.preventDefault()
    event.stopPropagation()
    if (focusIndex >= 0 && focusIndex < itemsCount && props.onChange) {
      props.onChange({ nativeEvent: event, itemIndex: focusIndex, option: options[focusIndex] })
    }
  }

  const closeRef = useRef()
  closeRef.current = event => {
    event.preventDefault()
    event.stopPropagation()
    if (props.onClose) props.onClose({ nativeEvent: event })
  }

  const onItemClick = props.onChange
    ? itemIndex => event => {
        event.preventDefault()
        event.stopPropagation()
        props.onChange({ nativeEvent: event, itemIndex, option: options[itemIndex] })
      }
    : null

  const onClick = props.onClick ? event => props.onClick({ nativeEvent: event }) : null

  useEventListener({
    listen: true,
    events: {
      click: {
        target: document,
        process: event => closeRef.current(event)
      },
      keydown: {
        target: document,
        process: event => {
          switch (event.code) {
            case 'Escape':
              closeRef.current(event)
              break
            case 'ArrowDown':
              stepRef.current(event, 1)
              break
            case 'ArrowUp':
              stepRef.current(event, -1)
              break
            case 'Enter':
              changeRef.current(event)
              break
          }
        }
      }
    }
  })

  return (
    <div ref={ref} className={className} style={props.style} onClick={onClick}>
      <div className={concat(`${CLASS}-items`, parentClassName ? `${parentClassName}-items` : null)}>
        {options.map((v, i) => (
          <div
            key={i}
            className={concat(
              `${CLASS}-items-item`,
              `${parentClassName}-items-item`,
              i === props.itemIndex ? `${CLASS}-items-item-selected` : null,
              i === props.itemIndex && parentClassName ? `${parentClassName}-items-item-selected` : null,
              i === focusIndex ? `${CLASS}-items-item-focused` : null,
              i === focusIndex && parentClassName ? `${parentClassName}-items-item-focused` : null
            )}
            onClick={onItemClick(i)}
          >
            {v.name}
          </div>
        ))}
      </div>
    </div>
  )
})

List.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  options: PropTypes.array,
  itemIndex: PropTypes.number,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onClose: PropTypes.func
}

List.displayName = 'List'

export default List
