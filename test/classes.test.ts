import { mergeClasses } from '../src/util/classes.js'

const mergeClassesTestData = [
  { classes: ['a', 'b', 'c'], result: { _: 'a b c' } },
  { classes: ['a', 'b', { _: '_c' }], result: { _: 'a b _c' } },
  { classes: ['a', 'b', 'c', { _: '_d _e' }], result: { _: 'a b c _d _e' } },
  {
    classes: ['a', 'b', { _: '_c' }, { a: 'a' }, { a: { _: '_a' } }, { b: 'b' }],
    result: { _: 'a b _c', a: { _: 'a _a' }, b: { _: 'b' } }
  }
]

describe('Classes utility tests', () => {
  describe('Test mergeClasses function', () => {
    mergeClassesTestData.forEach(data => {
      test(`Should ${JSON.stringify(data.classes)} be merged to ${JSON.stringify(data.result)}`, () => {
        const result = mergeClasses(...data.classes)
        expect(result).toEqual(data.result)
      })
    })
  })
})
