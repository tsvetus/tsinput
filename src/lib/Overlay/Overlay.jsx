import React, { useMemo, forwardRef, useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import { concat } from '../../util'

import './Overlay.css'

const CLASS = 'tsi-overlay'

const getNewState = (state, show, timeout) => {
  if (state) {
    if (show) {
      switch (state) {
        case 'none':
          return ['showing', 0]
        case 'showing':
          return ['show', timeout + 100]
        case 'show':
          return ['show', 0]
        default:
          return ['none', 0]
      }
    } else {
      switch (state) {
        case 'show':
          return ['hiding', 0]
        case 'hiding':
          return ['none', timeout + 100]
        default:
          return ['none', 0]
      }
    }
  } else return ['none', 0]
}

const Overlay = forwardRef((props, ref) => {
  const className = useMemo(() => concat(CLASS, props.className), [props.className])

  const onTargetRef = useRef()
  onTargetRef.current = props.onTarget

  const timer = useRef(0)

  const show = props.show
  const time = props.time

  const [style, setStyle] = useState(null)
  const [state, setState] = useState(null)

  useEffect(() => {
    const newStyle = props.style || {}
    const target = onTargetRef.current ? onTargetRef.current() : null
    if (target) {
      const rect = target.getBoundingClientRect()
      if (rect) {
        newStyle.top = `${rect.height}px`
        newStyle.left = `${0}px`
        newStyle.right = `${0}px`
      }
    }
    setStyle(newStyle)
  }, [props.style])

  useEffect(() => {
    if (style) {
      const [newState, newTimeout] = getNewState(state, show, time)
      timer.current = setTimeout(() => setState(newState), newTimeout)
    }
    return () => {
      if (timer.current) clearTimeout(timer.current)
    }
  }, [state, show, time, style])

  return state && 'none' !== state && style ? (
    <div ref={ref} className={`${className} ${className}-${state}`} style={style}>
      {props.children}
    </div>
  ) : null
})

Overlay.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  show: PropTypes.any,
  time: PropTypes.number,
  children: PropTypes.any,
  onTarget: PropTypes.func
}

Overlay.defaultProps = {
  time: 350
}

Overlay.displayName = 'Overlay'

export default Overlay
