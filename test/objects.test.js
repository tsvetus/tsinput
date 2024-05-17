import { expect } from 'chai'
import { extractNodes } from '../src/util/objects.js'

const extractNodesTestData = [
  { obj: { a: 'a', b: 'b' }, props: ['b'], ext: { b: 'b' }, rem: { a: 'a' } },
  { obj: { a: 'a', b: 'b' }, props: ['a'], ext: { a: 'a' }, rem: { b: 'b' } },
  { obj: { a: 'a', b: 'b' }, props: ['a', 'b'], ext: { a: 'a', b: 'b' }, rem: {} },
  { obj: { a: 'a', b: 'b', c: 'c' }, props: ['a', 'b'], ext: { a: 'a', b: 'b' }, rem: { c: 'c' } }
]

describe('Objects utility tests', () => {
  describe('Test extractNodes function', () => {
    extractNodesTestData.forEach(data => {
      it(`Should ${JSON.stringify(data.obj)} be splitted to ${JSON.stringify(data.ext)} and ${JSON.stringify(
        data.rem
      )}`, () => {
        const [ext, rem] = extractNodes(data.props, data.obj)
        expect(ext).to.deep.equal(data.ext)
        expect(rem).to.deep.equal(data.rem)
      })
    })
  })
})
