import React, { useMemo, MouseEvent } from 'react'

import { mergeClasses, mergeStyles } from '../../util'

import { TabControlProps } from './types'

const BASE = 'tsi-tab-control'

const CLASS = {
  _: BASE,
  header: `${BASE}-header`,
  tab: {
    _: `${BASE}-tab`,
    active: `${BASE}-tab-active`
  },
  content: `${BASE}-content`
}

const TabControl = ({ className, style, name, data, options = [], value, onChange }: TabControlProps) => {
  const classes = useMemo(() => mergeClasses(CLASS, className), [className])
  const styles = useMemo(() => mergeStyles(style), [style])

  const params = useMemo(() => ({ name, data }), [data, name])

  const activeIndex = useMemo(
    () => (options ? options.findIndex(v => value === (v.key || v.id || v.value || null)) : -1),
    [options, value]
  )

  const activeOption = useMemo(() => (activeIndex >= 0 ? options[activeIndex] : null), [activeIndex, options])

  const handleClick = (optionIndex: number) => (event: MouseEvent<HTMLDivElement>) => {
    if (activeIndex !== optionIndex && onChange) {
      const option = options[optionIndex]
      onChange({
        ...event,
        ...params,
        optionIndex,
        option,
        value: option.key || option.id || option.value || null
      })
    }
  }

  const tabsComponent = options.map((v, i) => {
    const caption = v.caption || v.name || v.label || null
    if (activeIndex === i) {
      const tabClass = mergeClasses(classes.tab, classes.tab?.active)
      const tabStyle = mergeStyles(styles.tab, styles.tab?.active)
      return (
        <div key={i} className={tabClass?._} style={tabStyle?._} onClick={handleClick(i)}>
          {caption}
        </div>
      )
    } else {
      return (
        <div key={i} className={classes.tab?._} style={styles.tab?._} onClick={handleClick(i)}>
          {caption}
        </div>
      )
    }
  })

  const contentComponent = activeOption?.render ? (
    <div className={classes.content?._} style={styles.content?._}>
      {activeOption.render()}
    </div>
  ) : null

  return (
    <div className={classes._} style={styles._}>
      <div className={classes.header?._} style={styles.header?._}>
        {tabsComponent}
      </div>
      {contentComponent}
    </div>
  )
}

export default TabControl
