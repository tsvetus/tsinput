import React from 'react'

import Docs from '../../components/Docs'

import LabelExample from './Label.example.jsx'
import LabelExampleCode from '!file!./Label.example.jsx'
import LabelExampleStyles from '!file!./Label.example.css'

import docs from './Label.docs.json'

const items = [{ example: <LabelExample />, code: LabelExampleCode, styles: LabelExampleStyles }]

const LabelDocs = () => <Docs docs={docs} items={items} />

export default LabelDocs
