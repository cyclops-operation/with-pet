import { useCallback, useEffect, useRef } from 'react'

type Handler = (event?: MouseEvent) => void

const useOutside = <T extends HTMLElement = HTMLElement>(callback: Handler) => {
  const ref = useRef<T>(null)

  const handleClick = useCallback(
    (e: MouseEvent) => {
      const element = ref?.current
      if (!element || element.contains(e.target as Node)) {
        return
      }
      callback(e)
    },
    [callback]
  )

  useEffect(() => {
    window.addEventListener('click', handleClick)
    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [handleClick])

  return { ref }
}

export default useOutside
