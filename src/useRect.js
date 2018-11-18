import { useState, useEffect, useRef } from 'react';

const useRect = (ref, once) => {
  const raf = useRef(null);
  const [rect, setRect] = useState({});

  function observe(cancel) {
    if (cancel && raf.current) {
      unobserve();
      return;
    }
    setRect(ref.current.getBoundingClientRect());
    raf.current = requestAnimationFrame(observe);
  }

  function unobserve() {
    cancelAnimationFrame(raf.current);
  }

  useEffect(() => {
    if (ref.current) {
      observe(once);
    }
    return () => {
      unobserve();
    };
  }, [once]);

  return { observe, rect, unobserve };
};

export default useRect;
