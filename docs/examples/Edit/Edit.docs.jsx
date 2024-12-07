import React from 'react'

import Docs from '../../components/Docs/index.js'

import EditExample from './Edit.example.jsx'
import EditExampleCode from '!file!./Edit.example.jsx'
import EditExampleStyles from '!file!./Edit.example.css'

import docs from './Edit.docs.json'

const items = [{ example: <EditExample />, code: EditExampleCode, styles: EditExampleStyles }]

const EditDocs = () => <Docs docs={docs} items={items} />

export default EditDocs
