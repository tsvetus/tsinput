const appendString = (target, string) => {
  const suffix = (string || '').trim()
  return suffix ? (target ? `${target} ${suffix}` : suffix) : target
}

export { appendString }
