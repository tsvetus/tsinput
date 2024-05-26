const findElement = className => {
  const element = document.getElementsByClassName(className)
  return element?.[0] || null
}

const initRefs =
  (...refs) =>
  element => {
    refs.forEach(ref => {
      if (ref) {
        ref.current = element
      }
    })
  }

export { findElement, initRefs }
