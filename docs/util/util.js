const listClasses = () => {
  const classes = []
  for (const sheet of document.styleSheets) {
    for (const rule of sheet.cssRules) {
      classes.push(rule.selectorText)
    }
  }
  return classes
}

const iconExp = /^\.tsi-icon-(.+)::before$/

const listIcons = () =>
  listClasses()
    .map(v => iconExp.exec(v))
    .filter(v => v)
    .map(v => v[1])

export { listClasses, listIcons }
