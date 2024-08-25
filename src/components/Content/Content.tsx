import React, { useRef, useMemo, forwardRef, useEffect, Ref } from 'react'

import { findElement, initRefs, mergeClasses, mergeStyles } from '../../util'

import { ContentProps } from './types'

const BASE = 'tsi-content'

const CLASS = {
  _: `${BASE}`
}

const Content = forwardRef(({ className, style, children }: ContentProps, extRef?: Ref<HTMLDivElement>) => {
  const mounted = useRef(false)

  const selfRef = useRef<HTMLDivElement>(null)
  const topRef = useRef<HTMLElement | null>(null)

  const classes = useMemo(() => mergeClasses(CLASS, className), [className])
  const styles = useMemo(() => mergeStyles(style), [style])

  useEffect(() => {
    if (!mounted.current) {
      topRef.current = findElement<HTMLElement>('tsi-top-bar')
    }
  }, [])

  useEffect(() => {
    if (!mounted.current) {
      if (selfRef.current) {
        if (topRef.current) {
          const rect = topRef.current?.getBoundingClientRect()
          selfRef.current.style.top = `${rect.height}px`
        }
        selfRef.current.style.visibility = 'visible'
      }
    }
  }, [])

  useEffect(() => {
    mounted.current = true
  }, [])

  return (
    <div ref={initRefs(selfRef, extRef)} className={classes._} style={styles._}>
      {children}
    </div>
  )
})

Content.displayName = 'Content'

export default Content
