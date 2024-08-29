import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useDebounce = (callback, delay) => {
  useEffect(() => {
    const handler = setTimeout(() => {
      callback();
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [callback, delay]);
};

const ScrollToTop = () => {
  const location = useLocation();

  useDebounce(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }); 
    
  return null;
};

export default ScrollToTop;
