import { useRef, useCallback, useEffect } from 'react'

const useEventListener = ({ listen = false, events = {} } = {}) => {
  const stopRef = useRef()

  const stopListening = useCallback(() => {
    if (stopRef.current) {
      stopRef.current()
      stopRef.current = null
    }
  }, [])

  const startListening = useCallback(() => {
    const listeners = Object.keys(events)
      .filter(type => events[type].target && events[type].process)
      .map(type => [events[type].target, type, event => events[type].process(event)])
    for (const [target, type, process] of listeners) target.addEventListener(type, process)
    return () => {
      for (const [target, type, process] of listeners) target.removeEventListener(type, process)
    }
  }, [events])

  useEffect(() => {
    if (listen) {
      stopListening()
      stopRef.current = startListening()
    } else {
      stopListening()
    }
    return () => {
      stopListening()
    }
  }, [listen, stopListening, startListening])
}

export default useEventListener
