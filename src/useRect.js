import { useState, useEffect, useRef } from 'react';

const useRect = (ref) => {
  const raf = useRef(null);
  const [rect, setRect] = useState({});

  function observe() {
    setRect(ref.current.getBoundingClientRect());
    raf.current = requestAnimationFrame(observe);
  }

  function unobserve() {
    cancelAnimationFrame(raf.current);
  }

  useEffect(() => {
    if (ref.current) {
      observe();
    }
    return () => {
      unobserve();
    };
  }, []);

  return { observe, rect, unobserve };
};

export default useRect;
