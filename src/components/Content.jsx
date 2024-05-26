import React, { useRef, forwardRef, useEffect } from 'react'
import PropTypes from 'prop-types'

import { findElement, initRefs } from '../util'

const CLASS = 'tsi-content'

const Content = forwardRef(({ children }, extRef) => {
  const mounted = useRef(false)
  const selfRef = useRef()
  const topRef = useRef()
  useEffect(() => {
    if (!mounted.current) {
      topRef.current = findElement('tsi-top-bar')
    }
  }, [])
  useEffect(() => {
    if (!mounted.current) {
      if (topRef?.current) {
        const rect = topRef.current.getBoundingClientRect()
        selfRef.current.style.top = `${rect.height}px`
      }
      selfRef.current.style.visibility = 'visible'
    }
  }, [])
  useEffect(() => {
    mounted.current = true
  }, [])
  return (
    <div ref={initRefs(selfRef, extRef)} className={CLASS}>
      {children}
    </div>
  )
})

Content.displayName = 'Content'

Content.propTypes = {
  children: PropTypes.any
}

export default Content
