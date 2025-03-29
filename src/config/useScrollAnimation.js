import { useEffect } from 'react';

const useScrollAnimation = (className, showClass) => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(`.${className}`);
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          element.classList.add(showClass);
        } else {
          element.classList.remove(showClass);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [className, showClass]);
};

export default useScrollAnimation;
