import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import Inline from './Inline'
import Column from './Column'

const Label = ({
  className,
  style,
  layout = '',
  name,
  data,
  text,
  icon,
  wait,
  invalid,
  children,
  onClick,
  onTextClick,
  onIconClick
}) => {
  const isColumn = useMemo(() => layout.includes('top') || layout.includes('border'), [layout])
  return isColumn ? (
    <Column
      className={className}
      style={style}
      layout={layout}
      name={name}
      data={data}
      text={text}
      icon={icon}
      wait={wait}
      invalid={invalid}
      onClick={onClick}
      onTextClick={onTextClick}
      onIconClick={onIconClick}
    >
      {children}
    </Column>
  ) : (
    <Inline
      className={className}
      style={style}
      layout={layout}
      name={name}
      data={data}
      text={text}
      icon={icon}
      wait={wait}
      invalid={invalid}
      onClick={onClick}
      onTextClick={onTextClick}
      onIconClick={onIconClick}
    >
      {children}
    </Inline>
  )
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
