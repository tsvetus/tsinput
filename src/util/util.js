const concat = (...classes) => {
  const result = classes.filter(v => v && v.trim().length)
  return result.length ? result.join(' ') : null
}

export { concat }
