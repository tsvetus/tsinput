import { TsiStyleSource, TsiStyle } from './types.js'

const normalize = (source: TsiStyleSource): TsiStyle => {
  const result = { _: undefined } as TsiStyle
  if (source) {
    if ('object' === typeof source) {
      for (const [key, val] of Object.entries(source)) {
        if ('_' === key) {
          result._ = { ...(result._ as object), ...(normalize(val)._ as object) }
        } else if ('string' === typeof val) {
          result._ = { ...(result._ as object), [key]: val }
        } else {
          result[key] = normalize(val)
        }
      }
    }
  }
  return result
}

const merge = (target: TsiStyle, source: object): TsiStyle => {
  const result = Object.assign(target || {} as TsiStyle)
  for (const [key, val] of Object.entries(source)) {
    if ('_' === key) {
      result._ = { ...result._, ...val }
    } else {
      result[key] = merge(result[key], val)
    }
  }
  return result
}

const mergeStyles = (...styles: TsiStyleSource[]): TsiStyle => {
  const normalizedStyles = styles.filter(sty => sty).map(sty => normalize(sty))
  let result = { _: undefined } as TsiStyle
  for (const sty of normalizedStyles) {
    result = merge(result, sty)
  }
  return result
}

export { mergeStyles }
