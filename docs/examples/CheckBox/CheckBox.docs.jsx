import React from 'react'

import Docs from '../../components/Docs/index.js'

import CheckBoxExample from './CheckBox.example.jsx'
import CheckBoxExampleCode from '!file!./CheckBox.example.jsx'
import CheckBoxExampleStyles from '!file!./CheckBox.example.css'

import docs from './CheckBox.docs.json'

const items = [{ example: <CheckBoxExample />, code: CheckBoxExampleCode, styles: CheckBoxExampleStyles }]

const CheckBoxDocs = () => <Docs docs={docs} items={items} />

export default CheckBoxDocs
