import { Ref, MutableRefObject } from 'react'

const findElement = <T extends Element>(className: string): T => {
  const element = document.getElementsByClassName(className)
  return element?.[0] as T
}

const initRefs =
  <T extends HTMLElement>(...refs: (Ref<T> | MutableRefObject<T> | undefined)[]) =>
  (element: T) => {
    refs.forEach(ref => {
      if (ref) {
        const legacyRef = ref as (instance: T | null) => void
        const objectRef = ref as MutableRefObject<T>
        if ('current' in objectRef) {
          objectRef.current = element
        } else if (legacyRef) {
          legacyRef(element)
        }
      }
    })
  }

export { findElement, initRefs }
