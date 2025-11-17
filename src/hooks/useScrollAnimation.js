import { useEffect, useRef } from 'react'

/**
 * Custom hook to add scroll animations to elements
 * Usage: const ref = useScrollAnimation('scroll-animate')
 * Then apply to element: <div ref={ref}>Content</div>
 */
export const useScrollAnimation = (animationType = 'scroll-animate') => {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Add animation class
    element.classList.add(animationType)

    // Create observer for this specific element
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [animationType])

  return ref
}

/**
 * Custom hook for scroll animation with stagger effect
 * Usage: const ref = useScrollAnimationStagger()
 * Apply to container: <div ref={ref} className="scroll-animate-stagger">
 */
export const useScrollAnimationStagger = () => {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Add animation class
    element.classList.add('scroll-animate-stagger')

    // Create observer for this specific element
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [])

  return ref
}
