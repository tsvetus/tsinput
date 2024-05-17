import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import Inline from './Inline'
import Column from './Column'

const Label = props => {
  const layout = useMemo(
    () => (props.layout ? (Array.isArray(props.layout) ? props.layout : props.layout.split(' ')) : []),
    [props.layout]
  )
  const isColumn = useMemo(() => layout.includes('top'), [layout])
  return isColumn ? <Column {...props} /> : <Inline {...props} />
}

Label.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  style: PropTypes.object,
  layout: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  name: PropTypes.string,
  data: PropTypes.any,
  text: PropTypes.any,
  icon: PropTypes.any,
  wait: PropTypes.any,
  invalid: PropTypes.any,
  children: PropTypes.any,
  onClick: PropTypes.func,
  onTextClick: PropTypes.func,
  onIconClick: PropTypes.func
}

export default Label
