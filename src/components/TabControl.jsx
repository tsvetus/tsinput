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

const TabControl = props => {
  const classes = useMemo(() => mergeClasses(CLASS, props.className), [props.className])
  const styles = useMemo(() => mergeStyles(props.style), [props.style])

  const params = useMemo(() => ({ name: props.name, data: props.data }), [props.data, props.name])

  const options = useMemo(() => (Array.isArray(props.options) ? props.options : []), [props.options])

  const activeIndex = useMemo(() => {
    const index = options.findIndex(v => props.value === (v.key || v.id || v.value || null))
    return index >= 0 ? index : options.length ? 0 : -1
  }, [options, props.value])

  const activeOption = useMemo(() => (activeIndex >= 0 ? options[activeIndex] : null), [activeIndex, options])

  const onClick = index => event => {
    if (activeIndex !== index && props.onChange) {
      const option = options[index]
      props.onChange({
        nativeEvent: event,
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
        <div key={i} className={tabClass?._} style={tabStyle?._} onClick={onClick(i)}>
          {caption}
        </div>
      )
    } else {
      return (
        <div key={i} className={classes.tab?._} style={styles.tab?._} onClick={onClick(i)}>
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
