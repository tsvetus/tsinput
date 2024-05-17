import React, { useMemo, forwardRef, useState, useRef } from 'react'
import PropTypes from 'prop-types'

import { useEvents } from '../hooks'

import { mergeClasses, mergeStyles } from '../util'

const NAME = 'tsi-list'

const CLASS = {
  _: NAME,
  items: `${NAME}-items`,
  item: {
    _: `${NAME}-item`,
    selected: `${NAME}-item-selected`,
    focused: `${NAME}-item-focused`
  }
}

const List = forwardRef((props, ref) => {
  const listRef = useMemo(() => ref || React.createRef(), [ref])

  const classes = useMemo(() => mergeClasses(CLASS, props.className), [props.className])

  const styles = useMemo(() => mergeStyles({ icon: {} }, props.style), [props.style])

  const params = useMemo(() => ({ name: props.name, data: props.data }), [props.data, props.name])

  const options = useMemo(() => props.options || [], [props.options])

  const itemsCount = useMemo(() => options.length, [options])

  const itemIndex = props.itemIndex

  const [focusIndex, setFocusIndex] = useState(itemIndex)

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
      props.onChange({ nativeEvent: event, ...params, itemIndex: focusIndex, option: options[focusIndex] })
    }
  }

  const closeRef = useRef()
  closeRef.current = event => {
    event.preventDefault()
    event.stopPropagation()
    if (props.onClose) props.onClose({ nativeEvent: event, ...params })
  }

  const onItemClick = index => event => {
    event.preventDefault()
    event.stopPropagation()
    props.onChange?.({ nativeEvent: event, ...params, itemIndex: index, option: options[index] })
  }

  const onClick = props.onClick ? event => props.onClick({ nativeEvent: event, ...params }) : null

  useEvents({
    ref: listRef,
    listen: true,
    onOuterClick: event => {
      closeRef.current(event)
    },
    onKeyDown: event => {
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
  })

  const itemsComponent = options.map((v, i) => {
    const itemClass = mergeClasses(
      classes.item,
      i === itemIndex ? classes.item?.selected : i === focusIndex ? classes.item?.focused : null
    )
    const itemStyle = mergeStyles(
      styles.item,
      i === itemIndex ? styles.item?.selected : i === focusIndex ? styles.item?.focused : null
    )
    return (
      <div key={i} className={itemClass._} style={itemStyle._} onClick={onItemClick(i)}>
        {v.name}
      </div>
    )
  })

  return (
    <div ref={listRef} className={classes._} style={styles._} onClick={onClick}>
      <div className={classes.items?._} style={styles.items?._}>
        {itemsComponent}
      </div>
    </div>
  )
})

List.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  style: PropTypes.object,
  name: PropTypes.string,
  data: PropTypes.any,
  options: PropTypes.array,
  itemIndex: PropTypes.number,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onClose: PropTypes.func
}

List.displayName = 'List'

export default List
