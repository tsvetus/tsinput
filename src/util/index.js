const concat = (...classes) =>
  classes
    .filter(v => v && v.trim().length)
    .reduce((acc, cur) => acc.concat(cur.split(' ')), [])
    .join(' ')

const click = (x, y) => {
  const event = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true,
    screenX: x,
    screenY: y
  })
  const element = document.elementFromPoint(x, y)
  element.dispatchEvent(event)
}

export { concat, click }
