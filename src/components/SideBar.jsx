import React, { useRef, useMemo, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Icon from './Icon'

import { mergeClasses, mergeStyles } from '../util'

const NAME = 'tsi-side-bar'

const CLASS = {
  _: NAME,
  header: `${NAME}-header`,
  title: `${NAME}-title`,
  close: `${NAME}-close`,
  content: `${NAME}-content`,
  footer: `${NAME}-footer`
}

const SideBar = props => {
  const selfRef = useRef()
  const topRef = props.topRef
  const targetRef = props.targetRef

  const classes = useMemo(() => mergeClasses(CLASS, props.className), [props.className])
  const styles = useMemo(() => mergeStyles(props.style), [props.style])

  const transition = useMemo(() => {
    const number = Number(props.transition || 0)
    return number >= 0 ? `${number}s` : `${props.transition || 0}`
  }, [props.transition])

  const width = useMemo(() => {
    const number = Number(props.width || 0)
    return number >= 0 ? `${number}px` : `${props.width || 0}`
  }, [props.width])
  const show = props.show

  const [mounted, setMounted] = useState(false)

  const onClose = props.onClose
    ? event => {
        props.onClose(event)
      }
    : null

  useEffect(() => {
    selfRef.current.style.transition = transition
    if (targetRef?.current) {
      targetRef.current.style.transition = transition
    }
    if (topRef?.current) {
      const rect = topRef.current.getBoundingClientRect()
      selfRef.current.style.top = `${rect.height}px`
    }
    setMounted(true)
  }, [targetRef, topRef, transition])

  useEffect(() => {
    if (mounted) {
      if (show) {
        selfRef.current.style.width = width
        if (targetRef?.current) {
          targetRef.current.style.marginLeft = width
        }
      } else {
        selfRef.current.style.width = '0'
        if (targetRef?.current) {
          targetRef.current.style.marginLeft = '0'
        }
      }
    }
  }, [mounted, show, targetRef, width])

  return (
    <div ref={selfRef} className={classes._} style={styles._}>
      <div className={classes.header?._} style={styles.header?._}>
        <div className={classes.title?._} style={styles.title?._}>
          {props.title}
        </div>
        <Icon
          className={classes.close?._}
          style={styles.close?._}
          name={props.name}
          data={props.data}
          icon={'close'}
          onClick={onClose}
        />
      </div>
      {props.children || props.content ? (
        <div className={classes.content?._} style={styles.content?._}>
          {props.children}
          {props.content}
        </div>
      ) : null}
      {props.footer ? (
        <div className={classes.footer?._} style={styles.footer?._}>
          {props.footer}
        </div>
      ) : null}
    </div>
  )
}

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
  targetRef: PropTypes.object,
  topRef: PropTypes.object,
  transition: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onClose: PropTypes.func
}

SideBar.defaultProps = {
  transition: '0.5s',
  width: '12em'
}

export default SideBar
