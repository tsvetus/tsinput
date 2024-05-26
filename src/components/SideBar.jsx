import React, { useRef, useMemo, useEffect, forwardRef } from 'react'
import PropTypes from 'prop-types'

import Icon from './Icon'

import { mergeClasses, mergeStyles, findElement, initRefs } from '../util'

const NAME = 'tsi-side-bar'

const CLASS = {
  _: NAME,
  header: `${NAME}-header`,
  title: `${NAME}-title`,
  close: `${NAME}-close`,
  content: `${NAME}-content`,
  footer: `${NAME}-footer`
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
    },
    extRef
  ) => {
    const mounted = useRef()
    const intRef = useRef()
    const topRef = useRef()
    const docRef = useRef()

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
      ? event => {
          onClose(event)
        }
      : null

    useEffect(() => {
      if (!mounted.current) {
        topRef.current = findElement('tsi-top-bar')
        docRef.current = findElement('tsi-content')
      }
    }, [])

    useEffect(() => {
      if (!mounted.current) {
        intRef.current.style.width = show ? width : '0'
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
    }, [show, width])

    useEffect(() => {
      if (mounted.current) {
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

SideBar.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  style: PropTypes.object,
  name: PropTypes.string,
  data: PropTypes.any,
  show: PropTypes.any,
  title: PropTypes.any,
  children: PropTypes.any,
  content: PropTypes.any,
  footer: PropTypes.any,
  transition: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onClose: PropTypes.func
}

export default SideBar
