import React, { useRef, useMemo } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'

import { mergeClasses, mergeStyles } from '../util'

const NAME = 'tsi-overlay'

const CLASS = {
  _: NAME
}

const Overlay = props => {
  const ref = useRef()
  const classes = useMemo(() => mergeClasses(CLASS, props.className), [props.className])
  const styles = useMemo(() => mergeStyles(props.style), [props.style])
  const params = useMemo(() => ({ name: props.name, data: props.data }), [props.data, props.name])
  const onEnter = () => {
    const target = props.onTarget?.()
    if (target && ref.current) {
      const rect = target.getBoundingClientRect()
      ref.current.style.left = `${0}px`
      ref.current.style.right = `${0}px`
      ref.current.style.top = `${rect.height + props.offset}px`
    }
  }
  const onEntered = event => {
    props.onEnter?.({ nativeEvent: event, ...params })
  }
  const onExited = event => {
    props.onExit?.({ nativeEvent: event, ...params })
  }
  return (
    <CSSTransition
      nodeRef={ref}
      in={props.show}
      timeout={props.timeout}
      classNames={NAME}
      unmountOnExit={!props.persistent}
      onEnter={onEnter}
      onEntered={onEntered}
      onExited={onExited}
    >
      <div ref={ref} className={classes._} style={styles._}>
        {props.children}
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

Overlay.defaultProps = {
  timeout: 350,
  offset: 0
}

export default Overlay
