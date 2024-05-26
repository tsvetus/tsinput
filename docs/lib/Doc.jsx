import React, { useRef, useMemo, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { renderToString } from 'react-dom/server'
import PropTypes from 'prop-types'

import { mergeClasses } from 'tsinput/util'

import './Doc.css'

const NAME = 'tsi-doc'

const CLASS = {
  _: NAME,
  content: `${NAME}-content`
}

const Doc = props => {
  const ref = useRef()
  const options = useMemo(() => props.options || [], [props.options])
  const classes = useMemo(() => mergeClasses(CLASS, props.className), [props.className])
  useEffect(() => {
    for (const option of options) {
      const target = document.getElementById(option.id)
      if (target) {
        if (option.code) {
          const pre = document.createElement('pre')
          const code = document.createElement('code')
          code.textContent = option.code
          pre.appendChild(code)
          target.appendChild(pre)
        } else if (option.element) {
          const div = document.createElement('div')
          target.appendChild(div)
          const root = createRoot(div)
          if (root) {
            root.render(option.element)
          }
        }
      }
    }
  }, [options])
  return (
    <div className={classes._}>
      <div ref={ref} className={classes.content?._} dangerouslySetInnerHTML={{ __html: props.template }} />
      <div className={classes.content?._}>{props.children}</div>
    </div>
  )
}

Doc.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  template: PropTypes.any,
  options: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.any
}

export default Doc
