import React from 'react'

import Docs from '../../components/Docs/index.js'

import ListBoxExample from './ListBox.example.jsx'
import ListBoxExampleCode from '!file!./ListBox.example.jsx'
import ListBoxExampleStyles from '!file!./ListBox.example.css'

import docs from './ListBox.docs.json'

const items = [{ example: <ListBoxExample />, code: ListBoxExampleCode, styles: ListBoxExampleStyles }]

const ListBoxDocs = () => <Docs docs={docs} items={items} />

export default ListBoxDocs
