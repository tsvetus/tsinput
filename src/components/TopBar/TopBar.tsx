import React, { useRef, useMemo, forwardRef, Ref, MouseEvent } from 'react'

import Icon from '../Icon'

import { mergeClasses, mergeStyles, initRefs } from '../../util'

import { TopBarProps } from './types'

const BASE = 'tsi-top-bar'

const CLASS = {
  _: BASE,
  icon: `${BASE}-icon`,
  left: `${BASE}-left`,
  center: `${BASE}-center`,
  right: `${BASE}-right`
}

const TopBar = forwardRef(
  ({ className, style, name, data, icon = 'burger', onIconClick }: TopBarProps, extRef?: Ref<HTMLDivElement>) => {
    const selfRef = useRef<HTMLDivElement>(null)
    const classes = useMemo(() => mergeClasses(CLASS, className), [className])
    const styles = useMemo(() => mergeStyles(style), [style])
    const handleIconClick = onIconClick
      ? (event: MouseEvent<HTMLElement>) => {
          onIconClick(event)
        }
      : undefined
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
  }
)

TopBar.displayName = 'TopBar'

export default TopBar
