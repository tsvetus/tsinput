import React, { ReactNode, useMemo } from 'react'

import { mergeClasses, mergeStyles } from '../util'

import { TsiClass, TsiStyle } from '../util/types'

const NAME = 'tsi-group'

interface GroupProps {
  /** css class name */
  className?: string | TsiClass
  /** css style */
  style?: object | TsiStyle
  /** Group content */
  children?: string | ReactNode
}

const Group = ({ className, style, children }: GroupProps) => {
  const classes = useMemo<TsiClass>(() => mergeClasses(NAME, className), [className])
  const styles = useMemo<TsiStyle>(() => mergeStyles(style), [style])
  return (
    <div className={classes._} style={styles._}>
      {children}
    </div>
  )
}

export default Group
