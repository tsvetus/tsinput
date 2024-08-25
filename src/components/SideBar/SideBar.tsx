import React, { useRef, useMemo, useEffect, forwardRef, ReactNode, Ref, MouseEvent } from 'react'

import Icon from '../Icon'

import { mergeClasses, mergeStyles, findElement, initRefs } from '../../util'
import { TsiClass, TsiMouseEventHandler } from '../../util/types'

interface SideBarClass {
  _?: string | TsiClass
  header?: string
  title?: string
  close?: string
  content?: string
  footer?: string
}

interface SideBarStyle {
  _?: object
  header?: object
  title?: object
  close?: object
  content?: object
  footer?: object
}

interface SideBarProps {
  className?: string | SideBarClass
  style?: object | SideBarStyle
  name?: string
  data?: unknown
  show?: boolean
  title?: string | ReactNode
  children?: string | ReactNode
  content?: string | ReactNode
  footer?: string | ReactNode
  transition?: number | string
  width?: number | string
  onClose?: TsiMouseEventHandler<HTMLElement>
}

const BASE = 'tsi-side-bar'

const CLASS = {
  _: BASE,
  header: `${BASE}-header`,
  title: `${BASE}-title`,
  close: `${BASE}-close`,
  content: `${BASE}-content`,
  footer: `${BASE}-footer`
}

const SideBar = forwardRef(
  (
    {
      className,
      style,
      name,
      data,
      show,
      title,
      children,
      content,
      footer,
      transition = '0.5s',
      width = '12em',
      onClose
    }: SideBarProps,
    extRef?: Ref<HTMLDivElement>
  ) => {
    const mounted = useRef(false)
    const intRef = useRef<HTMLDivElement>(null)
    const topRef = useRef<HTMLElement | null>(null)
    const docRef = useRef<HTMLElement | null>(null)

    const classes = useMemo(() => mergeClasses(CLASS, className), [className])
    const styles = useMemo(() => mergeStyles(style), [style])

    const cssTransition = useMemo(() => {
      const number = Number(transition || 0)
      return number >= 0 ? `${number}s` : `${transition || 0}`
    }, [transition])

    const cssWidth = useMemo(() => {
      const number = Number(width || 0)
      return number >= 0 ? `${number}px` : `${width || 0}`
    }, [width])

    const handleClose = onClose
      ? (event: MouseEvent<HTMLElement>) => {
          onClose(event)
        }
      : undefined

    useEffect(() => {
      if (!mounted.current) {
        topRef.current = findElement<HTMLElement>('tsi-top-bar')
        docRef.current = findElement<HTMLElement>('tsi-content')
      }
    }, [])

    useEffect(() => {
      if (!mounted.current && intRef.current) {
        intRef.current.style.width = show ? cssWidth : '0'
        if (topRef.current) {
          const rect = topRef.current.getBoundingClientRect()
          intRef.current.style.top = `${rect.height}px`
        }
        if (docRef.current) {
          const rect = intRef.current.getBoundingClientRect()
          docRef.current.style.marginLeft = `${rect.width}px`
        }
        intRef.current.style.visibility = 'visible'
      }
    }, [show, cssWidth])

    useEffect(() => {
      if (mounted.current && intRef.current) {
        intRef.current.style.transition = cssTransition
        if (docRef.current) {
          docRef.current.style.transition = cssTransition
        }
        if (show) {
          intRef.current.style.width = cssWidth
          if (docRef?.current) {
            docRef.current.style.marginLeft = cssWidth
          }
        } else {
          intRef.current.style.width = '0'
          if (docRef?.current) {
            docRef.current.style.marginLeft = '0'
          }
        }
      }
    }, [show, cssTransition, cssWidth])

    useEffect(() => {
      mounted.current = true
    }, [])

    return (
      <div ref={initRefs(intRef, extRef)} className={classes._} style={styles._}>
        <div className={classes.header?._} style={styles.header?._}>
          <div className={classes.title?._} style={styles.title?._}>
            {title}
          </div>
          <Icon
            className={classes.close?._}
            style={styles.close?._}
            name={name}
            data={data}
            icon={'close'}
            onClick={handleClose}
          />
        </div>
        {children || content ? (
          <div className={classes.content?._} style={styles.content?._}>
            {children}
            {content}
          </div>
        ) : null}
        {footer ? (
          <div className={classes.footer?._} style={styles.footer?._}>
            {footer}
          </div>
        ) : null}
      </div>
    )
  }
)

SideBar.displayName = 'SideBar'

export default SideBar
