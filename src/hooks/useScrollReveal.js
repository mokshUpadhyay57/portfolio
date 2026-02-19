import { useEffect, useRef, useState } from 'react';

/**
 * Hook to trigger animations when element enters viewport
 * @returns [ref, isVisible]
 */
export const useScrollReveal = (options = { threshold: 0.1, triggerOnce: true }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const { threshold, triggerOnce } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (triggerOnce && ref.current) {
          observer.unobserve(ref.current);
        }
      } else if (!triggerOnce) {
        setIsVisible(false);
      }
    }, { threshold });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, triggerOnce]);

  return [ref, isVisible];
};
