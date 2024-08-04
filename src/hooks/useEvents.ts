import { useEffect, RefObject } from 'react'

interface UseEventsProps {
  ref?: RefObject<HTMLElement>
  listen?: boolean
  onClick?: (event: MouseEvent) => void
  onOuterClick?: (event: MouseEvent) => void
  onKeyDown?: (event: KeyboardEvent) => void
}

export const useEvents = ({ ref, listen = true, onClick, onOuterClick, onKeyDown }: UseEventsProps) => {
  useEffect(() => {
    if (listen) {
      const click = (event: MouseEvent) => {
        if (onClick) {
          onClick(event)
        }
        const element = ref?.current
        if (listen && element && onOuterClick) {
          onOuterClick(event)
        }
      }
      const keyDown = (event: KeyboardEvent) => {
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
