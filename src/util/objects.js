const extractNodes = (props, obj) => {
  const result = [{}, {}]
  Object.entries(obj).forEach(([key, val]) => {
    if (props.includes(key)) {
      result[0][key] = val
    } else {
      result[1][key] = val
    }
  })
  return result
}

export { extractNodes }
