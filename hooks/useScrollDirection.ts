// hooks/useScrollDirection.ts
import { useState, useEffect } from 'react';

type ScrollDirection = 'up' | 'down' | 'none';

/**
 * Custom hook to detect scroll direction and whether the user is at the top of the page.
 *
 * @returns {object} An object containing:
 * - direction: 'up' | 'down' | 'none'
 * - isAtTop: boolean
 */
export default function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>('none');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Update isAtTop
      setIsAtTop(currentScrollY === 0);

      if (currentScrollY > lastScrollY && currentScrollY > 100) { // Scroll down
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) { // Scroll up
        setScrollDirection('up');
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]); // Re-run effect if lastScrollY changes

  return { direction: scrollDirection, isAtTop };
}