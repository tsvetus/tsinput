import React from 'react'

import Docs from '../../components/Docs/index.js'

import MemoExample from './Memo.example.jsx'
import MemoExampleCode from '!file!./Memo.example.jsx'
import MemoExampleStyles from '!file!./Memo.example.css'

import docs from './Memo.docs.json'

const items = [{ example: <MemoExample />, code: MemoExampleCode, styles: MemoExampleStyles }]

const MemoDocs = () => <Docs docs={docs} items={items} />

export default MemoDocs
