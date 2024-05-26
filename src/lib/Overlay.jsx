import React, { useRef, useMemo } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'

import { mergeClasses, mergeStyles } from '../util'

const NAME = 'tsi-overlay'

const CLASS = {
  _: NAME
}

const Overlay = ({
  className,
  style,
  name,
  data,
  offset = 0,
  timeout = 350,
  show,
  persistent,
  children,
  onEnter,
  onExit,
  onTarget
}) => {
  const ref = useRef()
  const classes = useMemo(() => mergeClasses(CLASS, className), [className])
  const styles = useMemo(() => mergeStyles(style), [style])
  const params = useMemo(() => ({ name, data }), [name, data])
  const handleEnter = () => {
    const target = onTarget?.()
    if (target && ref.current) {
      const rect = target.getBoundingClientRect()
      ref.current.style.left = `${0}px`
      ref.current.style.right = `${0}px`
      ref.current.style.top = `${rect.height + offset}px`
    }
  }
  const handleEntered = event => {
    onEnter?.({ nativeEvent: event, ...params })
  }
  const handleExited = event => {
    onExit?.({ nativeEvent: event, ...params })
  }
  return (
    <CSSTransition
      nodeRef={ref}
      in={show}
      timeout={timeout}
      classNames={NAME}
      unmountOnExit={!persistent}
      onEnter={handleEnter}
      onEntered={handleEntered}
      onExited={handleExited}
    >
      <div ref={ref} className={classes._} style={styles._}>
        {children}
      </div>
    </CSSTransition>
  )
}

Overlay.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  style: PropTypes.object,
  name: PropTypes.string,
  data: PropTypes.any,
  show: PropTypes.any,
  timeout: PropTypes.number,
  persistent: PropTypes.any,
  children: PropTypes.any,
  offset: PropTypes.number,
  onEnter: PropTypes.func,
  onExit: PropTypes.func,
  onTarget: PropTypes.func
}

export default Overlay
