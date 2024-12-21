import { TsiClass, TsiStyle, TsiClassSource, TsiStyleSource, TsiSchema } from './types'

import { appendString } from './strings'

import { mergeClasses } from './classes'
import { mergeStyles } from './styles'

const collapseClass = (source: TsiClass, schema: TsiSchema): TsiClass => {
  const result = { _: source?._ } as TsiClass
  for (const key in source) {
    if ('_' !== key) {
      if (source[key] && schema[key]) {
        if ('object' === typeof schema?.[key]) {
          result[key] = collapseClass(source[key], schema[key])
        } else if (schema[key]) {
          result._ = appendString(result._, source[key]._)
        }
      }
    }
  }
  return result
}

const collapseStyle = (source: TsiStyle, schema: TsiSchema): TsiStyle => {
  const result = { _: source?._ } as TsiStyle
  for (const key in source) {
    if ('_' !== key) {
      if (source[key] && schema[key]) {
        if ('object' === typeof schema?.[key]) {
          result[key] = collapseStyle(source[key], schema[key])
        } else if (schema[key]) {
          result._ = { ...result._, ...source[key]._ }
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
  schema?: TsiSchema,
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
