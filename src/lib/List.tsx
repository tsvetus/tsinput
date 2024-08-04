import React, { useMemo, forwardRef, useState, useRef, Ref } from 'react'

import {
  TsiClass,
  TsiStyle,
  TsiListItem,
  TsiMouseEventHandler,
  TsiEventHandler,
  TsiListEventHandler,
  TsiKeyboardEventHandler
} from '../util/types'

import { useEvents } from '../hooks'

import { mergeClasses, mergeStyles, initRefs } from '../util'

interface ListProps {
  className?: string | TsiClass
  style?: object | TsiStyle
  name?: string
  data?: unknown
  options: TsiListItem[]
  itemIndex?: number
  onChange: TsiListEventHandler
  onClose: TsiEventHandler
  onClick?: TsiMouseEventHandler<HTMLDivElement>
  onKeyDown?: TsiKeyboardEventHandler<HTMLDivElement>
}

type StepEventHandler = (event: MouseEvent | KeyboardEvent, step: number) => void
type ChangeEventHandler = (event: MouseEvent | KeyboardEvent) => void
type CloseEventHandler = (event: MouseEvent | KeyboardEvent) => void

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
  (
    { className, style, name, data, options = [], itemIndex, onChange, onClose, onClick, onKeyDown }: ListProps,
    extRef?: Ref<HTMLDivElement>
  ) => {
    const intRef = useRef<HTMLDivElement>(null)

    const classes = useMemo(() => mergeClasses(CLASS, className), [className])

    const styles = useMemo(() => mergeStyles({ icon: {} }, style), [style])

    const params = useMemo(() => ({ name, data }), [data, name])

    const itemsCount = useMemo(() => options?.length || 0, [options])

    const [focusIndex, setFocusIndex] = useState(itemIndex ?? -1)

    const stepRef = useRef<StepEventHandler>()
    stepRef.current = (event: MouseEvent | KeyboardEvent, step: number) => {
      event.preventDefault()
      event.stopPropagation()
      const newIndex = focusIndex + step
      if (newIndex >= 0 && newIndex < itemsCount) setFocusIndex(newIndex)
    }

    const changeRef = useRef<ChangeEventHandler>()
    changeRef.current = (event: MouseEvent | KeyboardEvent) => {
      event.preventDefault()
      event.stopPropagation()
      if (options && focusIndex >= 0 && focusIndex < itemsCount && onChange) {
        onChange({ ...event, ...params, itemIndex: focusIndex, option: options[focusIndex] })
      }
    }

    const closeRef = useRef<CloseEventHandler>()
    closeRef.current = event => {
      event.preventDefault()
      event.stopPropagation()
      onClose?.({ ...event, ...params })
    }

    const handleItemClick = (index: number) => (event: React.MouseEvent<HTMLDivElement>) => {
      event.nativeEvent.preventDefault()
      event.nativeEvent.stopPropagation()
      onChange?.({ ...event, ...params, itemIndex: index, option: options[index] })
    }

    const handleListClick = onClick
      ? (event: React.MouseEvent<HTMLDivElement>) => {
          onClick({ ...event, ...params })
        }
      : undefined

    const handleListKeyDown = onKeyDown
      ? (event: React.KeyboardEvent<HTMLDivElement>) => {
          onKeyDown({ ...event, ...params })
        }
      : undefined

    useEvents({
      ref: intRef,
      listen: true,
      onOuterClick: event => {
        closeRef.current?.(event)
      },
      onKeyDown: (event: KeyboardEvent) => {
        switch (event.code) {
          case 'Escape':
            closeRef.current?.(event)
            break
          case 'ArrowDown':
            stepRef.current?.(event, 1)
            break
          case 'ArrowUp':
            stepRef.current?.(event, -1)
            break
          case 'Enter':
            changeRef.current?.(event)
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
      <div
        ref={initRefs<HTMLDivElement>(intRef, extRef)}
        className={classes._}
        style={styles._}
        onClick={handleListClick}
        onKeyDown={handleListKeyDown}
      >
        <div className={classes.items?._} style={styles.items?._}>
          {itemsComponent}
        </div>
      </div>
    )
  }
)

List.displayName = 'List'

export default List
