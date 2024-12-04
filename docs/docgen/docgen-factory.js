import { parse } from 'react-docgen'
import fs from 'fs'

import { path, root, listDirectories, listFiles } from '../../bin/util.js'

const examplesPath = path.resolve(root, 'docs/examples')
const sourcesPath = path.resolve(root, 'src/components')

const docgen = sourceFile => {
  const comp = fs.readFileSync(sourceFile, 'utf-8')
  return parse(comp, { filename: sourceFile })
}

const parseDocs = docs => {
  const result = []
  for (const key in docs) {
    const doc = docs[key]
    const { description, displayName, props } = doc
    const propsDocs = []
    for (const key in props) {
      const prop = props[key]
      const { description, tsType, required, defaultValue } = prop
      propsDocs.push({ name: key, description, type: tsType?.raw, required, defaultValue: defaultValue?.value })
    }
    result.push({ name: displayName, description, props: propsDocs })
  }
  return result
}

const docgenFactory = () => {
  const readExamples = () => {
    const folders = listDirectories(examplesPath) || []
    const result = []
    for (const f of folders) {
      const sourceFile = path.resolve(sourcesPath, f, `${f}.tsx`)
      const exampleDir = path.resolve(examplesPath, f)
      const exampleFiles = listFiles(exampleDir)
        .filter(v => v.includes('.example.'))
        .map(v => path.resolve(examplesPath, f, v))
      result.push({ name: f, sourceFile, exampleDir, exampleFiles })
    }
    return result
  }
  const writeDocs = (example, docs) => {
    fs.writeFileSync(path.resolve(example.exampleDir, `${example.name}.docs.json`), JSON.stringify(docs, null, 2))
  }
  const run = () => {
    const examples = readExamples()
    for (const example of examples) {
      const docs = parseDocs(docgen(example.sourceFile))
      writeDocs(example, docs)
    }
  }
  return run
}

export default docgenFactory
