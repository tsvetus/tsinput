import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import { concat } from '../../util'

import './Textarea.css'

const CLASS = 'tsi-textarea'

const Textarea = props => {
  const className = useMemo(() => concat(CLASS, props.className), [props.className])
  const style = useMemo(() => ({ width: `${props.width}px`, height: `${props.height}` }), [props.width, props.height])
  return (
    <textarea className={className} style={style} type={'text'} onChange={props.onChange}>
      {props.value}
    </textarea>
  )
}

Textarea.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  onChange: PropTypes.func
}

export default Textarea
