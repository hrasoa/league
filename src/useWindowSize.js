import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  function setSizes() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener('resize', setSizes);
    return () => {
      window.removeEventListener('resize', setSizes);
    };
  }, []);

  return { height, width };
};

export default useWindowSize;
