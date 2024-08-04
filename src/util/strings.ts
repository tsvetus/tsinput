const appendString = (target: string | undefined, string: string | undefined) => {
  const suffix = (string ?? '').trim()
  if (suffix) {
    return target ? `${target} ${suffix}` : suffix
  } else {
    return target
  }
}

export { appendString }
