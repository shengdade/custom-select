import { useEffect, useRef, useState } from 'react'

export default function useVisible(initialVisible: boolean) {
  const [isVisible, setVisible] = useState(initialVisible)
  const ref = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setVisible(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside, true)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true)
    }
  }, [])

  return { ref, isVisible, setVisible }
}
