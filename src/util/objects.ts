const asArray = (source: string | string[]) => (Array.isArray(source) ? source : source ? source.split(' ') : [])

const selectItems = (source: string | string[], props: string[] = [], add: string[] = []) => {
  const result = asArray(source).filter(v => props.includes(v))
  for (const a of add) {
    if (!result.includes(a)) result.push(a)
  }
  return result
}

export { asArray, selectItems }
