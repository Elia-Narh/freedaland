import { useEffect, useRef, useState } from 'react'

/**
 * AnimatedCounter Component
 * Animates a number from 0 to the target value when it comes into view
 * Restarts animation every time the element comes back into view
 * Can fetch data from API or use static value
 * Usage: 
 *   <AnimatedCounter target={1000} suffix="+" duration={2000} />
 *   <AnimatedCounter fetchUrl="/api/clients" suffix="+" duration={2000} />
 */
export const AnimatedCounter = ({ 
  target = 100, 
  suffix = '', 
  prefix = '', 
  duration = 2000,
  fetchUrl = null,
  dataKey = 'count'
}) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [finalTarget, setFinalTarget] = useState(target)
  const [loading, setLoading] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef(null)

  // Fetch data from API if fetchUrl is provided
  useEffect(() => {
    if (!fetchUrl) return

    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch(fetchUrl)
        const data = await response.json()
        
        // Extract the count from the response
        const value = dataKey.split('.').reduce((obj, key) => obj?.[key], data)
        if (typeof value === 'number') {
          setFinalTarget(value)
        }
      } catch (error) {
        console.error('Error fetching counter data:', error)
        // Fall back to static target if fetch fails
        setFinalTarget(target)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [fetchUrl, dataKey, target])

  useEffect(() => {
    // Create Intersection Observer to detect when element is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reset and restart animation every time it comes into view
          setCount(0)
          setHasAnimated(false)
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!isVisible || hasAnimated) return

    let startTime = Date.now()
    let animationFrame

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth animation
      const easeOutQuad = 1 - (1 - progress) * (1 - progress)
      const currentCount = Math.floor(finalTarget * easeOutQuad)

      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(finalTarget)
        setHasAnimated(true)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isVisible, finalTarget, duration, hasAnimated])

  // Format large numbers with commas
  const formattedCount = count.toLocaleString('en-US')

  return (
    <div ref={ref} className="stat-number">
      {loading ? '...' : (
        <>
          {prefix}
          {formattedCount}
          {suffix}
        </>
      )}
    </div>
  )
}

export default AnimatedCounter
