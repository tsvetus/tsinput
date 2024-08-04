import { useMemo } from 'react'

import { TsiClass, TsiStyle } from '../util/types'

import { appendString } from '../util'

type TsiCheckFunc = (key: string) => unknown

const collapseClass = (source: TsiClass, check: (key: string) => unknown, preffix: string = '') => {
  const result = { _: source._ } as TsiClass
  for (const key in source) {
    if ('_' !== key) {
      const child = source[key] as TsiClass
      const node = preffix ? `${preffix}-${key}` : key
      if (1 < Object.keys(child).length) {
        result[key] = collapseClass(child, check, node)
      } else if (check(node)) {
        result._ = appendString(result._, child._)
      }
    }
  }
  return result
}

const collapseStyle = (source: TsiStyle, check: (key: string) => unknown, preffix: string = '') => {
  const result = { _: source._ } as TsiStyle
  for (const key in source) {
    if ('_' !== key) {
      const child = source[key] as TsiStyle
      const node = preffix ? `${preffix}-${key}` : key
      if (1 < Object.keys(child).length) {
        result[key] = collapseStyle(child, check, node)
      } else if (check(node)) {
        result._ = { ...result._, ...child._ }
      }
    }
  }
  return result
}

const useLayout = (baseClass: TsiClass, baseStyle: TsiStyle, check: TsiCheckFunc) => {
  const classes = useMemo(() => collapseClass(baseClass, check), [baseClass, check])
  const styles = useMemo(() => collapseStyle(baseStyle, check), [baseStyle, check])
  return { classes, styles }
}

export default useLayout
