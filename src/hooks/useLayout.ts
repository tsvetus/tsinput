import { useMemo } from 'react'

import { TsiClass, TsiStyle } from '../util/types'

import { appendString } from '../util'

type TsiCheckFunc = (key: string) => unknown

const collapseClass = (
  source: TsiClass | undefined,
  check: (key: string) => unknown,
  preffix: string = ''
): TsiClass => {
  const result = { _: source?._ } as TsiClass
  for (const key in source) {
    if ('_' !== key) {
      const child = source[key]
      if (child) {
        const length = Object.keys(child).length
        const node = preffix ? `${preffix}-${key}` : key
        if (1 < length /* || (1 === length && child._)*/) {
          result[key] = collapseClass(child, check, node)
        } else if (check(node)) {
          result._ = appendString(result._, child._)
        }
      }
    }
  }
  return result
}

const collapseStyle = (
  source: TsiStyle | undefined,
  check: (key: string) => unknown,
  preffix: string = ''
): TsiStyle => {
  const result = { _: source?._ } as TsiStyle
  for (const key in source) {
    if ('_' !== key) {
      const child = source[key]
      if (child) {
        const length = Object.keys(child).length
        const node = preffix ? `${preffix}-${key}` : key
        if (1 < length || (1 === length && child._)) {
          result[key] = collapseStyle(child, check, node)
        } else if (check(node)) {
          result._ = { ...result._, ...child._ }
        }
      }
    }
  }
  return result
}

const useLayout = (
  baseClass: TsiClass | undefined,
  baseStyle: TsiStyle | undefined,
  check: TsiCheckFunc
): [TsiClass, TsiStyle] => {
  const classes = useMemo(() => collapseClass(baseClass, check), [baseClass, check])
  const styles = useMemo(() => collapseStyle(baseStyle, check, ''), [baseStyle, check])
  return [classes, styles]
}

export default useLayout
