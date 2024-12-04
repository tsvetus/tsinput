import React from 'react'

import IconExample from './Icon.example.jsx'
import IconExampleCode from '!file!./Icon.example.jsx'
import IconExampleStyles from '!file!./Icon.example.css'

import Docs from '../../components/Docs'

import IconList from './Icon.list.jsx'

import docs from './Icon.docs.json'

const items = [
  { example: <IconExample />, code: IconExampleCode, styles: IconExampleStyles },
  { content: <IconList />, caption: 'Available icon list:' }
]

const IconDocs = () => <Docs docs={docs} items={items} />

export default IconDocs
