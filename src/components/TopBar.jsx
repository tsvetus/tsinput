import React, { useMemo, forwardRef } from 'react'
import PropTypes from 'prop-types'

import Icon from './Icon'

import { mergeClasses, mergeStyles } from '../util'

const NAME = 'tsi-top-bar'

const CLASS = {
  _: NAME,
  icon: `${NAME}-icon`,
  left: `${NAME}-left`,
  center: `${NAME}-center`,
  right: `${NAME}-right`
}

const TopBar = forwardRef((props, ref) => {
  const classes = useMemo(() => mergeClasses(CLASS, props.className), [props.className])
  const styles = useMemo(() => mergeStyles(props.style), [props.style])

  const onIconClick = props.onIconClick
    ? event => {
        props.onIconClick(event)
      }
    : null

  return (
    <div ref={ref} className={classes._} style={styles._}>
      <div className={classes.left?._} style={styles.left?._}>
        <Icon
          className={classes.close?._}
          style={styles.close?._}
          name={props.name}
          data={props.data}
          icon={props.icon}
          onClick={onIconClick}
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

TopBar.defaultProps = {
  icon: 'burger'
}

export default TopBar
