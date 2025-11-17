/**
 * Scroll Animations Utility
 * Triggers animations when elements come into view during scroll
 */

export const initScrollAnimations = () => {
  // Create Intersection Observer
  const observerOptions = {
    threshold: 0.1, // Trigger when 10% of element is visible
    rootMargin: '0px 0px -50px 0px' // Start animation slightly before element is fully visible
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add the in-view class to trigger animation
        entry.target.classList.add('in-view')
        // Optionally stop observing after animation triggers
        // observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Observe all elements with scroll animation classes
  const animatedElements = document.querySelectorAll(
    '.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-stagger'
  )

  animatedElements.forEach((element) => {
    observer.observe(element)
  })

  return observer
}

/**
 * Add scroll animation class to elements
 * Usage: addScrollAnimation(element, 'scroll-animate')
 */
export const addScrollAnimation = (element, animationType = 'scroll-animate') => {
  element.classList.add(animationType)
}

/**
 * Cleanup scroll animations observer
 */
export const cleanupScrollAnimations = (observer) => {
  if (observer) {
    observer.disconnect()
  }
}
