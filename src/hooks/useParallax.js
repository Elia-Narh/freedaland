import { useEffect, useRef } from 'react'

/**
 * Custom hook to add subtle parallax scroll effect to elements
 * Usage: const ref = useParallax(0.5) // 0.5 = 50% of scroll speed
 * Then apply to element: <div ref={ref} className="parallax-element">
 */
export const useParallax = (speed = 0.5) => {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const rate = scrolled * -speed

      element.style.transform = `translateY(${rate}px)`
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [speed])

  return ref
}
