import React, { useMemo, forwardRef, useState, useRef } from 'react'
import PropTypes from 'prop-types'

import { useEvents } from '../hooks'

import { mergeClasses, mergeStyles, initRefs } from '../util'

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

const List = forwardRef(
  ({ className, style, name, data, options = [], itemIndex, onChange, onClose, onClick }, extRef) => {
    const intRef = useRef()

    const classes = useMemo(() => mergeClasses(CLASS, className), [className])

    const styles = useMemo(() => mergeStyles({ icon: {} }, style), [style])

    const params = useMemo(() => ({ name, data }), [data, name])

    const itemsCount = useMemo(() => options?.length || 0, [options])

    const [focusIndex, setFocusIndex] = useState(itemIndex)

    const stepRef = useRef()
    stepRef.current = (event, step) => {
      event.nativeEvent.preventDefault()
      event.nativeEvent.stopPropagation()
      const newIndex = focusIndex + step
      if (newIndex >= 0 && newIndex < itemsCount) setFocusIndex(newIndex)
    }

    const changeRef = useRef()
    changeRef.current = event => {
      event.nativeEvent.preventDefault()
      event.nativeEvent.stopPropagation()
      if (options && focusIndex >= 0 && focusIndex < itemsCount && onChange) {
        onChange({ ...event, ...params, itemIndex: focusIndex, option: options[focusIndex] })
      }
    }

    const closeRef = useRef()
    closeRef.current = event => {
      event.nativeEvent.preventDefault()
      event.nativeEvent.stopPropagation()
      onClose?.({ ...event, ...params })
    }

    const handleItemClick = index => event => {
      event.nativeEvent.preventDefault()
      event.nativeEvent.stopPropagation()
      onChange?.({ ...event, ...params, itemIndex: index, option: options[index] })
    }

    const handleListClick = event => {
      onClick?.({ ...event, ...params })
    }

    useEvents({
      ref: intRef,
      listen: true,
      onOuterClick: event => {
        closeRef.current({ nativeEvent: event })
      },
      onKeyDown: event => {
        switch (event.code) {
          case 'Escape':
            closeRef.current({ nativeEvent: event })
            break
          case 'ArrowDown':
            stepRef.current({ nativeEvent: event }, 1)
            break
          case 'ArrowUp':
            stepRef.current({ nativeEvent: event }, -1)
            break
          case 'Enter':
            changeRef.current({ nativeEvent: event })
            break
        }
      }
    })

    const itemsComponent = options
      ? options.map((v, i) => {
          const itemClass = mergeClasses(
            classes.item,
            i === itemIndex ? classes.item?.selected : i === focusIndex ? classes.item?.focused : null
          )
          const itemStyle = mergeStyles(
            styles.item,
            i === itemIndex ? styles.item?.selected : i === focusIndex ? styles.item?.focused : null
          )
          return (
            <div key={i} className={itemClass._} style={itemStyle._} onClick={handleItemClick(i)}>
              {v.name}
            </div>
          )
        })
      : null

    return (
      <div ref={initRefs(intRef, extRef)} className={classes._} style={styles._} onClick={handleListClick}>
        <div className={classes.items?._} style={styles.items?._}>
          {itemsComponent}
        </div>
      </div>
    )
  }
)

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
