import React, { useMemo } from 'react'

import { mergeClasses, mergeStyles } from '../../util'

import { TsiClass, TsiStyle } from '../../util/types'

import { GroupProps } from './types'

const BASE = 'tsi-group'

const CLASS = {
  _: BASE
}

const Group = ({ className, style, children }: GroupProps) => {
  const classes = useMemo<TsiClass>(() => mergeClasses(CLASS, className), [className])
  const styles = useMemo<TsiStyle>(() => mergeStyles(style), [style])
  return (
    <div className={classes._} style={styles._}>
      {children}
    </div>
  )
}

export default Group
