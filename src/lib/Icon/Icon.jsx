import React, { useMemo, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { concat } from '../../util'

import './Icon.css'

import ICONS from './icons'

const CLASS = 'tsi-icon'

const Icon = props => {
  const className = useMemo(
    () => concat(CLASS, props.className, props.onClick ? 'tsi-icon-clickable' : null),
    [props.className]
  )

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
      const target = props.onTarget()
      if (target) {
        const rect = target.getBoundingClientRect()
        if (rect) {
          newStyle.width = `${rect.height - margin[1] - margin[3]}px`
          newStyle.height = `${rect.height - margin[0] - margin[2]}px`
        }
      }
      setStyle(newStyle)
    }
  }, [icon, props.margin, props.style])

  const onClick = event => {
    if (props.onclick) props.onClick({ nativeEvent: event })
  }

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
  icon: PropTypes.any,
  magring: PropTypes.array,
  onClick: PropTypes.func
}

export default Icon
