const selectProps = (obj, props) => {
  if (obj && props) {
    const result = {}
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

const asArray = source => (Array.isArray(source) ? source : source ? source.split(' ') : [])

const selectItems = (source, props = [], add = []) => {
  const result = asArray(source).filter(v => props.includes(v))
  for (const a of add) {
    if (!result.includes(a)) result.push(a)
  }
  return result
}

const stringify = (obj, props) => {
  return JSON.stringify(selectProps(obj, props))
}

export { selectProps, asArray, selectItems, stringify }
