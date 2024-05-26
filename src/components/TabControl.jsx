import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import { mergeClasses, mergeStyles } from '../util'

const NAME = 'tsi-tab-control'

const CLASS = {
  _: NAME,
  header: `${NAME}-header`,
  tab: {
    _: `${NAME}-tab`,
    active: `${NAME}-tab-active`
  },
  content: `${NAME}-content`
}

const TabControl = ({ className, style, name, data, options = [], value, onChange }) => {
  const classes = useMemo(() => mergeClasses(CLASS, className), [className])
  const styles = useMemo(() => mergeStyles(style), [style])

  const params = useMemo(() => ({ name, data }), [data, name])

  const activeIndex = useMemo(
    () => (options ? options.findIndex(v => value === (v.key || v.id || v.value || null)) : -1),
    [options, value]
  )

  const activeOption = useMemo(() => (activeIndex >= 0 ? options[activeIndex] : null), [activeIndex, options])

  const handleClick = index => event => {
    if (activeIndex !== index && onChange) {
      const option = options[index]
      onChange({
        ...event,
        ...params,
        index,
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

TabControl.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  style: PropTypes.object,
  name: PropTypes.string,
  data: PropTypes.any,
  options: PropTypes.arrayOf(PropTypes.object),
  value: PropTypes.any,
  onChange: PropTypes.func
}

export default TabControl
