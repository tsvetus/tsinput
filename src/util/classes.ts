import { appendString } from './strings'

import { TsiClass, TsiClassSource } from './types.js'

const normalize = (source: TsiClassSource): TsiClass => {
  const result = { _: '' } as TsiClass
  if (source) {
    if ('object' === typeof source) {
      for (const [key, val] of Object.entries(source)) {
        if ('_' === key) {
          result._ = appendString(result._, normalize(val)._)
        } else {
          result[key] = normalize(val)
        }
      }
    } else if ('string' === typeof source) {
      result._ = source.trim()
    }
  }
  return result
}

const merge = (target: TsiClass, source: object): TsiClass => {
  const result = Object.assign(target || { _: '' } as TsiClass)
  for (const [key, val] of Object.entries(source)) {
    if ('_' === key) {
      result._ = appendString(result._, val)
    } else {
      result[key] = merge(result[key], val)
    }
  }
  return result
}

const mergeClasses = (...classes: TsiClassSource[]): TsiClass => {
  const normalizedClasses = classes.filter(cls => cls).map(cls => normalize(cls))
  let result = { _: '' } as TsiClass
  for (const cls of normalizedClasses) {
    result = merge(result, cls)
  }
  return result
}

export { mergeClasses }
