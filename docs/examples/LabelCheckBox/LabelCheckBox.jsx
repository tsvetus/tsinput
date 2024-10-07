import React from 'react'

import Doc from '../../lib/Doc'

import App from './App'

import template from './LabelCheckBox.md'
import css from '!file!./App.css'
import jsx from '!file!./App.jsx'

const options = [
  { id: 'css', code: css },
  { id: 'code', code: jsx },
  { id: 'example', element: <App /> }
]

const LabelCheckBox = () => {
  return <Doc template={template} options={options}></Doc>
}

export default LabelCheckBox
