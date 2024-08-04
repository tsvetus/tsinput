import React from 'react'

import Doc from '../../lib/Doc'

import Icons from './Icons'

import App from './App'

import template from './Icon.md'
import css from '!file!./App.css'
import jsx from '!file!./App.jsx'

const options = [
  { id: 'css', code: css },
  { id: 'code', code: jsx },
  { id: 'example', element: <App /> },
  { id: 'icons', element: <Icons /> }
]

const Icon = () => {
  return <Doc template={template} options={options}></Doc>
}

export default Icon
