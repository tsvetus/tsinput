import { TsiClass, TsiStyle, TsiObject, TsiClassSource, TsiStyleSource } from './types'

import { appendString } from './strings'

import { mergeClasses } from './classes'
import { mergeStyles } from './styles'

const collapseClass = (source: TsiClass | undefined, schema: TsiObject, preffix: string = ''): TsiClass => {
  const result = { _: source?._ } as TsiClass
  for (const key in source) {
    if ('_' !== key) {
      const child = source[key]
      if (child) {
        const node = preffix ? `${preffix}-${key}` : key
        if (node in schema) {
          if (schema[node]) {
            result._ = appendString(result._, child._)
          }
        } else {
          result[key] = collapseClass(child, schema, node)
        }
      }
    }
  }
  return result
}

const collapseStyle = (source: TsiStyle | undefined, schema: TsiObject, preffix: string = ''): TsiStyle => {
  const result = { _: source?._ } as TsiStyle
  for (const key in source) {
    if ('_' !== key) {
      const child = source[key]
      if (child) {
        const node = preffix ? `${preffix}-${key}` : key
        if (node in schema) {
          if (schema[node]) {
            result._ = { ...result._, ...child._ }
          }
        } else {
          result[key] = collapseStyle(child, schema, node)
        }
      }
    }
  }
  return result
}

type TsiLayoutCallback = (classes: TsiClass | undefined, styles: TsiStyle | undefined) => [TsiClass, TsiStyle]

const createLayout = (
  classes: TsiClassSource[],
  styles: TsiStyleSource[],
  schema?: TsiObject,
  callback?: TsiLayoutCallback
): [TsiClass, TsiStyle] => {
  const mergedClasses = mergeClasses(...classes)
  const mergedStyles = mergeStyles(...styles)
  if (schema) {
    const collapsedClasses = collapseClass(mergedClasses, schema)
    const collapsedStyles = collapseStyle(mergedStyles, schema)
    if (callback) {
      callback(collapsedClasses, collapsedStyles)
    }
    return [collapsedClasses, collapsedStyles]
  } else {
    if (callback) {
      callback(mergedClasses, mergedStyles)
    }
    return [mergedClasses, mergedStyles]
  }
}

export { createLayout }
