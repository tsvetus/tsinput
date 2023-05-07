import React, { useMemo, useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'

import { concat } from '../../util'

import './Icon.css'

import ICONS from './icons'

const CLASS = 'tsi-icon'

const Icon = props => {
  const className = useMemo(
    () => concat(CLASS, props.className, props.onClick ? 'tsi-icon-clickable' : null),
    [props.className, props.onClick]
  )

  const onTargetRef = useRef()
  onTargetRef.current = props.onTarget

  const [style, setStyle] = useState(null)

  const icon = useMemo(() => ICONS[props.icon] || null, [props.icon])

  const margin = useMemo(() => {
    const result = Array(4).fill(0)
    return props.margin && Array.isArray(props.margin) ? result.map((_v, i) => props.margin[i] ?? 0) : result
  }, [props.margin])

  useEffect(() => {
    if (icon) {
      const newStyle = props.style || {}
      if (props.margin && Array.isArray(props.margin)) {
        const margin = Array(4)
          .fill(0)
          .map((_v, i) => props.margin[i] ?? 0)
        newStyle.margin = margin.map(v => `${v}px`).join(' ')
      }
      const target = onTargetRef.current ? onTargetRef.current() : null
      if (target) {
        const rect = target.getBoundingClientRect()
        if (rect) {
          newStyle.width = `${rect.height - margin[1] - margin[3]}px`
          newStyle.height = `${rect.height - margin[0] - margin[2]}px`
        }
      }
      setStyle(newStyle)
    }
  }, [icon, margin, props.margin, props.style])

  const onClick = props.onClick ? event => props.onClick({ nativeEvent: event }) : null

  return icon && style ? (
    <svg viewBox={icon.viewBox} className={className} style={style} onClick={onClick}>
      {icon.g.map((v, i) => (
        <v.t key={i} {...v.a} />
      ))}
    </svg>
  ) : null
}

Icon.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  icon: PropTypes.any,
  margin: PropTypes.array,
  onTarget: PropTypes.func,
  onClick: PropTypes.func
}

export default Icon
