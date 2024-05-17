import { useEffect } from 'react'

export const useEvents = props => {
  const { ref, listen = true, onClick, onOuterClick, onKeyDown } = props || {}
  useEffect(() => {
    if (listen) {
      const click = event => {
        if (onClick) {
          onClick(event)
        }
        const target = ref?.current
        if (listen && target && onOuterClick) {
          const element = target.contains ? target : target.getElement ? target.getElement() : null
          if (element && !element.contains(event.target)) {
            onOuterClick(event)
          }
        }
      }
      const keyDown = event => {
        if (listen && onKeyDown) {
          onKeyDown(event)
        }
      }
      if (onClick || onOuterClick) document.addEventListener('click', click)
      if (onKeyDown) document.addEventListener('keydown', keyDown, { passive: false })
      return () => {
        if (onClick || onOuterClick) document.removeEventListener('click', click)
        if (onKeyDown) document.removeEventListener('keydown', keyDown)
      }
    } else return () => {}
  }, [listen, ref, onOuterClick, onKeyDown, onClick])
}

export default useEvents
