
import { useState, useEffect, RefObject } from 'react';

export const useIntersectionObserver = (
  ref: RefObject<Element>,
  options: IntersectionObserverInit = {}
) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return isIntersecting;
};
