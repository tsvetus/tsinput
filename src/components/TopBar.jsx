import React, { useRef, useMemo, forwardRef } from 'react'
import PropTypes from 'prop-types'

import Icon from './Icon'

import { mergeClasses, mergeStyles, initRefs } from '../util'

const NAME = 'tsi-top-bar'

const CLASS = {
  _: NAME,
  icon: `${NAME}-icon`,
  left: `${NAME}-left`,
  center: `${NAME}-center`,
  right: `${NAME}-right`
}

const TopBar = forwardRef(({ className, style, name, data, icon = 'burger', onIconClick }, extRef) => {
  const selfRef = useRef()
  const classes = useMemo(() => mergeClasses(CLASS, className), [className])
  const styles = useMemo(() => mergeStyles(style), [style])
  const handleIconClick = onIconClick
    ? event => {
        onIconClick(event)
      }
    : null
  return (
    <div ref={initRefs(selfRef, extRef)} className={classes._} style={styles._}>
      <div className={classes.left?._} style={styles.left?._}>
        <Icon
          className={classes.icon?._}
          style={styles.icon?._}
          name={name}
          data={data}
          icon={icon}
          onClick={handleIconClick}
        />
      </div>
      <div className={classes.center?._} style={styles.center?._}></div>
      <div className={classes.right?._} style={styles.right?._}></div>
    </div>
  )
})

TopBar.displayName = 'TopBar'

TopBar.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  style: PropTypes.object,
  name: PropTypes.string,
  data: PropTypes.any,
  icon: PropTypes.string,
  onIconClick: PropTypes.func
}

export default TopBar
