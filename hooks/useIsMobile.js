
import { useState, useEffect } from 'react';

const useIsMobile = (breakpoint = 640) => {
  // Default to false to handle SSR
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Check if we're in the browser
    if (typeof window !== 'undefined') {
      const checkIsMobile = () => {
        setIsMobile(window.innerWidth < breakpoint);
      };
      
      // Initial check
      checkIsMobile();
      
      // Listen for window resize events
      window.addEventListener('resize', checkIsMobile);
      
      // Cleanup
      return () => window.removeEventListener('resize', checkIsMobile);
    }
  }, [breakpoint]);
  
  return isMobile;
};

export default useIsMobile;