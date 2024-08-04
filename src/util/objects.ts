import { TsiObject } from './types'

const selectProps = (obj: object, props: string[]) => {
  if (obj && props) {
    const result = {} as TsiObject
    for (const [key, val] of Object.entries(obj)) {
      if (props.includes(key)) {
        result[key] = val
      }
    }
    return result
  } else {
    return obj || {}
  }
}

const asArray = (source: string | string[]) => (Array.isArray(source) ? source : source ? source.split(' ') : [])

const selectItems = (source: string | string[], props: string[] = [], add: string[] = []) => {
  const result = asArray(source).filter(v => props.includes(v))
  for (const a of add) {
    if (!result.includes(a)) result.push(a)
  }
  return result
}

const stringify = (obj: object, props: string[]) => {
  return JSON.stringify(selectProps(obj, props))
}

export { selectProps, asArray, selectItems, stringify }
