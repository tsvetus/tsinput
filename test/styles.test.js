import { expect } from 'chai'
import { mergeStyles } from '../src/util/styles.js'

const mergeStylesTestData = [
  { styles: [{ a: 'a' }, { b: 'b' }], result: { _: { a: 'a', b: 'b' } } },
  { styles: [{ a: 'a' }, { b: 'b' }, { _: { c: 'c' } }], result: { _: { a: 'a', b: 'b', c: 'c' } } },
  { styles: [{ a: 'a' }, { b: { c: 'c' } }], result: { _: { a: 'a' }, b: { _: { c: 'c' } } } }
]

describe('Styles utility tests', () => {
  describe('Test mergeStyles function', () => {
    mergeStylesTestData.forEach(data => {
      it(`Should ${JSON.stringify(data.styles)} be merged to ${JSON.stringify(data.result)}`, () => {
        const result = mergeStyles(...data.styles)
        expect(result).to.deep.equal(data.result)
      })
    })
  })
})
